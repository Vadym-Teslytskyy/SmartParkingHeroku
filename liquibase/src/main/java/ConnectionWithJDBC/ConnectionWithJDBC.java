package ConnectionWithJDBC;

import java.sql.*;

import liquibase.Contexts;
import liquibase.LabelExpression;
import liquibase.Liquibase;
import liquibase.database.Database;
import liquibase.database.DatabaseFactory;
import liquibase.database.OfflineConnection;
import liquibase.database.jvm.JdbcConnection;
import liquibase.exception.DatabaseException;
import liquibase.exception.LiquibaseException;
import liquibase.resource.ClassLoaderResourceAccessor;


public class ConnectionWithJDBC {

    /**
     * JDBC Driver and database url
     */
  static final String JDBC_DRIVER = "com.mysql.jdbc.Driver";
  static final String DATABASE_URL = "jdbc:mysql://localhost:3306/smartparking";
  static final String USER = "root";
  static final String PASSWORD = "root";


    public static void main(String[] args) throws ClassNotFoundException, SQLException,LiquibaseException {
        Connection connection = null;

            Class.forName(JDBC_DRIVER);

            connection = DriverManager.getConnection(DATABASE_URL, USER, PASSWORD);

            Database database = DatabaseFactory.getInstance().findCorrectDatabaseImplementation(new JdbcConnection(connection));

            Liquibase liquibase = new liquibase.Liquibase("liquibase/db-changelog-master.xml", new ClassLoaderResourceAccessor(), database);

            liquibase.update(new Contexts(), new LabelExpression());

    }


}
