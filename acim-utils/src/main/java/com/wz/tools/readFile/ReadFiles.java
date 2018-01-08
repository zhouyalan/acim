package com.wz.tools.readFile;
import java.io.*;
import java.util.ArrayList;
import java.util.List;


public class ReadFiles {

    /*
     * getText方法吧path路径里面的文件按行读数来放入一个大的String里面去
     * 并在换行的时候加入\r\n
     */
    public static List<String> getSqlScriptList(String path,boolean isClassPath){
        File file = new File(path);
        List<String> sqlList = new ArrayList<String>();
       // if(!file.exists()||file.isDirectory()){
       //     return null;
        //}
        StringBuilder sb = new StringBuilder();
        try{

            InputStream fis = null;

            if(isClassPath){
                fis =  ReadFiles.class.getClassLoader().getResourceAsStream(path);//
            }else {
                fis = new FileInputStream(path);
            }
           // InputStream fis =  ReadFiles.class.getClassLoader().getResourceAsStream(path);//new FileInputStream(path);
            InputStreamReader isr = new InputStreamReader(fis,"UTF-8");
            BufferedReader br = new BufferedReader(isr);
            String temp = null;
            temp = br.readLine();
            while(temp!=null){
                if(temp.length()>=2){
                    String str1 = temp.substring(0, 1);
                    String str2 = temp.substring(0, 2);
                    if(str1.equals("#")||str2.equals("--")||str2.equals("/*")||str2.equals("//")){
                        temp = br.readLine();
                        continue;
                    }
                    sb.append(temp);
                    if( temp.indexOf(';')>0){

                        sqlList.add(sb.toString());
                        sb.delete(0,sb.length());
                    }

                }

                temp = br.readLine();
            }
            br.close();
           // return sqlList;
           // br.close();

        }catch(Exception e){
            e.printStackTrace();
        }
        return sqlList;
    }

}
