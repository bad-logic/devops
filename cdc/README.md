## Enabling CDC in oracle database
> The events are fired to the kafka, where subscribers can consume it.


## STEPS FOR CDC IN ORACLE
1. https://debezium.io/documentation/reference/stable/connectors/oracle.html#setting-up-oracle
2. before setting recovery file destination, create the file first
    ```bash
    $ mkdir -p /opt/oracle/oradata/recovery_area
    $ chown oracle:dba /opt/oracle/oradata/recovery_area
    ```
3. https://debezium.io/documentation/reference/stable/connectors/oracle.html#_preparing_the_database
    ```bash
    -- for switching between container database (cdb) and pluggable database (pdb)
    $ sqlplus / as sysdba
        SQL> SELECT name, cdb FROM v$database;
        SQL> SELECT SYS_CONTEXT('USERENV','CON_NAME') AS container FROM dual;
        SQL> ALTER SESSION SET CONTAINER = CDB$ROOT; -- switching between container db (cdb) and pluggable db(pdb)
        SQL> ALTER SESSION SET CONTAINER = ORCLPDB1;
    ```
4. https://debezium.io/documentation/reference/stable/connectors/oracle.html#creating-users-for-the-connector
5. https://debezium.io/documentation/reference/stable/connectors/oracle.html#pluggable-vs-non-pluggable-databases
6. create an application user
    ```sql
    --- create an application user
    CREATE TABLESPACE app_tbs DATAFILE '/opt/oracle/oradata/ORCLCDB/ORCLPDB1/app_tbs.dbf' SIZE 50M  AUTOEXTEND ON MAXSIZE UNLIMITED;
    CREATE USER app_user IDENTIFIED BY StrongPass123 DEFAULT TABLESPACE app_tbs QUOTA UNLIMITED ON app_tbs;
    GRANT CREATE SESSION TO app_user;
    GRANT CREATE TABLE TO app_user;
    GRANT CREATE SEQUENCE TO app_user;
    GRANT CREATE VIEW TO app_user;
    GRANT CREATE PROCEDURE TO app_user;
    GRANT UNLIMITED TABLESPACE TO app_user;
    
    create table Student (
         id INT PRIMARY KEY,
         email VARCHAR(50),
         address VARCHAR(50),
         enrollment_date DATE,
         date_of_birth DATE,
         major VARCHAR(20),
         status VARCHAR(20),
    
         CONSTRAINT major_check CHECK(major IN ('CS','ENG','MATH','CHEM','PHYS','BIO','FIN','ACC','MED','LAW','ART','PR','ECO')),
         CONSTRAINT status_check CHECK(status IN ('active','graduated','inactive'))
    );
    ```
7. create a oracle source connector<br>
    ```bash
    $ curl -i -X POST -H "Accept:application/json" -H "Content-Type:application/json" http://localhost:8083/connectors/ -d @register-oracle.json
    $ curl http://localhost:8083/connectors
    $ curl http://localhost:8083/connectors/<conn_name>/status
    $ curl -X DELETE http://localhost:8083/connectors/<conn_name>
    ```

8. once setup make a change on the table, you will be able to see the db changes event inside kafka topics