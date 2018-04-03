//package com.smartparking.realtimeserver.config;
//
//import com.zaxxer.hikari.HikariConfig;
//import com.zaxxer.hikari.HikariDataSource;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.ComponentScan;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.context.annotation.PropertySource;
//import org.springframework.core.env.Environment;
//import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
//import org.springframework.orm.jpa.JpaTransactionManager;
//import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
//import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;
//import org.springframework.transaction.PlatformTransactionManager;
//import org.springframework.transaction.annotation.EnableTransactionManagement;
//
//import javax.persistence.EntityManagerFactory;
//import javax.sql.DataSource;
//import java.util.Properties;
//
//@Configuration
//@EnableTransactionManagement
//@PropertySource("classpath:application.properties")
//@ComponentScan("com.smartparking.service")
//@EnableJpaRepositories(basePackages = "com.smartparking.repository")
//public class PersistenceContext {
//
//    @Bean
//    public DataSource dataSource(Environment environment) {
//        HikariConfig dataSourceConfig = new HikariConfig();
//        dataSourceConfig.setDriverClassName(environment.getRequiredProperty("db.driver"));
//        dataSourceConfig.setJdbcUrl(environment.getRequiredProperty("db.url"));
//        dataSourceConfig.setUsername(environment.getRequiredProperty("db.username"));
//        dataSourceConfig.setPassword(environment.getRequiredProperty("db.password"));
//        dataSourceConfig.setMaximumPoolSize(5);
//        return new HikariDataSource(dataSourceConfig);
//    }
//
//    @Bean
//    public LocalContainerEntityManagerFactoryBean entityManagerFactory(DataSource dataSource, Environment env) {
//        LocalContainerEntityManagerFactoryBean entityManagerFactoryBean = new LocalContainerEntityManagerFactoryBean();
//        entityManagerFactoryBean.setDataSource(dataSource);
//        entityManagerFactoryBean.setJpaVendorAdapter(new HibernateJpaVendorAdapter());
//        entityManagerFactoryBean.setPackagesToScan("com.smartparking.entity");
//
//        Properties jpaProperties = new Properties();
//        jpaProperties.put("hibernate.dialect", env.getRequiredProperty("hibernate.dialect"));
//        jpaProperties.put("hibernate.hbm2ddl.auto", env.getRequiredProperty("hibernate.hbm2ddl.auto"));
//        jpaProperties.put("hibernate.show_sql", env.getRequiredProperty("hibernate.show_sql"));
//        jpaProperties.put("hibernate.format_sql", env.getRequiredProperty("hibernate.format_sql"));
//        jpaProperties.put("hibernate.enable_lazy_load_no_trans", env.getRequiredProperty("hibernate.enable_lazy_load_no_trans"));
//        entityManagerFactoryBean.setJpaProperties(jpaProperties);
//
//        return entityManagerFactoryBean;
//    }
//
//    @Bean
//    public PlatformTransactionManager transactionManager(EntityManagerFactory entityManagerFactory) {
//        JpaTransactionManager transactionManager = new JpaTransactionManager();
//        transactionManager.setEntityManagerFactory(entityManagerFactory);
//        return transactionManager;
//    }
//}
