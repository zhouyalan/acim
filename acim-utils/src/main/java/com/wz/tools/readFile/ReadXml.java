package com.wz.tools.readFile;

import org.dom4j.Document;
import org.dom4j.DocumentException;
import org.dom4j.Element;
import org.dom4j.io.SAXReader;

import java.io.InputStream;
import java.util.List;

/**
 * 解析参数xml的工具类 返回配置的参数信息到前台页面。
 * @author wuliufu
 */
public class ReadXml {

    /**
     * 获取指定路径下参数xml的DOC对象
     * @author wuliufu
     */
    @SuppressWarnings("unchecked")
    public static List<Element> getOptionElement(String title, String path) throws Exception {
        try {
            SAXReader reader = new SAXReader();
            Document doc = reader.read(ReadXml.class.getClassLoader().getResourceAsStream(path));
            List<Element> elementList = doc.selectNodes(title);
            if (elementList.size() > 0) {
                return elementList;
            }
        } catch (DocumentException e) {
            e.printStackTrace();
            throw new Exception("解析XML出错：", e);
        }
        return null;
    }

    /**
     * 获取指定路径下参数xml的DOC对象
     * @author wuliufu
     */
    @SuppressWarnings("unchecked")
    public static List<Element> getOptionElement(String title, InputStream is) throws Exception {

        try {
            SAXReader reader = new SAXReader();
            Document doc = reader.read(is);
            List<Element> elementList = doc.selectNodes(title);
            if (elementList.size() > 0) {
                return elementList;
            }
        } catch (DocumentException e) {
            e.printStackTrace();
            throw new Exception("解析XML出错：", e);
        }
        return null;
    }


}
