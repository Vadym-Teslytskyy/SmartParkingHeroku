package com.smartparking.eventprocessor.config;


import com.smartparking.entity.Event;
import com.smartparking.eventprocessor.element.RequestItemProcessor;
import com.smartparking.eventprocessor.element.RequestItemReader;
import com.smartparking.eventprocessor.element.RequestItemWriter;
import org.springframework.batch.core.*;
import org.springframework.batch.core.configuration.annotation.EnableBatchProcessing;
import org.springframework.batch.core.configuration.annotation.JobBuilderFactory;
import org.springframework.batch.core.configuration.annotation.StepBuilderFactory;
import org.springframework.batch.core.launch.JobLauncher;
import org.springframework.batch.core.launch.support.SimpleJobLauncher;
import org.springframework.batch.core.repository.JobExecutionAlreadyRunningException;
import org.springframework.batch.core.repository.JobInstanceAlreadyCompleteException;
import org.springframework.batch.core.repository.JobRepository;
import org.springframework.batch.core.repository.JobRestartException;
import org.springframework.batch.core.repository.support.MapJobRepositoryFactoryBean;
import org.springframework.batch.item.ItemProcessor;
import org.springframework.batch.item.ItemReader;
import org.springframework.batch.item.ItemWriter;
import org.springframework.batch.support.transaction.ResourcelessTransactionManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;


@Configuration
@EnableBatchProcessing
@EnableScheduling
public class BatchConfiguration {
    @Autowired
    public JobBuilderFactory jobBuilderFactory;

    @Autowired
    public StepBuilderFactory stepBuilderFactory;

//    @Autowired
//    private PlatformTransactionManager transactionManager;

    @Autowired
    JobRepository jobRepository;

    @Autowired
    Job job;

    @Scheduled(cron = "*/10 * * * * *")
    public void perform() {
        try {
            JobExecution execution = jobLauncher(jobRepository).run(job, new JobParameters());
        } catch (JobExecutionAlreadyRunningException e) {
            e.printStackTrace();
        } catch (JobRestartException e) {
            e.printStackTrace();
        } catch (JobInstanceAlreadyCompleteException e) {
            e.printStackTrace();
        } catch (JobParametersInvalidException e) {
            e.printStackTrace();
        }
    }

    @Bean
    JobLauncher jobLauncher(JobRepository jobRepository) {
        SimpleJobLauncher launcher = new SimpleJobLauncher();
        launcher.setJobRepository(jobRepository);
        return launcher;
    }

    @Bean
    JobRepository jobRepository() {
        MapJobRepositoryFactoryBean factoryBean = new MapJobRepositoryFactoryBean(new ResourcelessTransactionManager());
        try {
            JobRepository jobRepository = factoryBean.getObject();
            return jobRepository;
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @Bean
    Job job(Step step1) {
        Job job = jobBuilderFactory.get("myJob").start(step1).build();
        return job;
    }

    @Bean
    Step step1(ItemReader<Event> reader, ItemProcessor<Event, Event> processor, ItemWriter<Event> writer) {
        return stepBuilderFactory.get("step1")
                .<Event, Event>chunk(3)
                .reader(reader)
                .processor(processor)
                .writer(writer)
//                .transactionManager(transactionManager)
                .allowStartIfComplete(true)
                .build();
    }

    @Bean
    ItemReader<Event> requestItemReader() {
        return new RequestItemReader();
    }

    @Bean
    ItemProcessor<Event, Event> requestItemProcessor() {
        return new RequestItemProcessor();
    }

    @Bean
    ItemWriter<Event> requestItemWriter() {
        return new RequestItemWriter();
    }

}
