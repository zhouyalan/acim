package com.wz.framework.dataBase;

import com.wz.tools.WzCons;
import com.wz.tools.readFile.ReadFiles;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.ApplicationContext;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.web.context.support.WebApplicationContextUtils;

import java.util.Map;
import java.util.List;

/**
 * @author  marrisa
 * @data_time 2017_12_01
 * @descripte jdbc 执行sql的公用方法
 */

@Repository
public class JdbTemplateBase {

    @Autowired
    @Qualifier("jdbcTemplate")
    private JdbcTemplate jdbcTemplate =null;



    public List<Map<String, Object>> queryForList(final String sql) {

        //jdbcTemplate.e
        return jdbcTemplate.queryForList(sql);
    }


    /**
     * 执行sql脚本文件 使用Spring工具类
     */
    public void runSqlBySpringUtils() throws Exception {


        final List<String> sqlList = ReadFiles.getSqlScriptList(WzCons.sqlScriptUrl,true);
        if(sqlList !=null &&  sqlList.size()>0 ){
            executeBatch(sqlList);
        }else{
            System.out.println("sql file is empty");
        }

        //jdbcTemplate.e
    }


    /**
     * 判断数据库是否存在，如果存在返回true，否则返回false；
     * @param dataBaseName
     * @return
     */
    public boolean isDataBaseExist(String dataBaseName){

        String sql = "SELECT * FROM information_schema.SCHEMATA where SCHEMA_NAME='"+dataBaseName +"'";

        List<Map<String,Object>> list = jdbcTemplate.queryForList(sql);
        if(list.size()>0){

            return true;
        }else{
            return false;
        }

    }

    /**
     * 判断某个表是否存在， 如果存在返回true，否则返回false
     * @return
     */
    public boolean isTableExist(String  tableName){

        String sql = "SELECT *  FROM information_schema.TABLES WHERE table_name ='"+ tableName+"'";

        List<Map<String,Object>> list = jdbcTemplate.queryForList(sql);
        if(list.size()>0){

            return true;
        }else{
            return false;
        }

    }

    /**
     * 批处理sql
     * @param sqlList
     * @return
     */
    public int[] executeBatch(final List<String> sqlList) {
        String[] str = new String[sqlList.size()];
        sqlList.toArray(str);
        return jdbcTemplate.batchUpdate(str);
    }


}
