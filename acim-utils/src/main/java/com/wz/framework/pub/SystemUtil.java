package com.wz.framework.pub;

import com.wz.tools.WzCons;
import com.wz.tools.readFile.ReadXml;

import java.util.*;

/**
 * 系统的一些公共方法
 */
public class SystemUtil {


    public List<Map<String,String>> getMenuList() throws Exception {


        List<Map<String,String>> listMenu = new ArrayList<Map<String,String >>();
        List<org.dom4j.Element> list = ReadXml.getOptionElement("menu", WzCons.menu_address);
        for (org.dom4j.Element element: list) {
            Iterator it = element.attributeIterator();
            Map<String,String > map = new HashMap<String,String >();
            for (Iterator it1 = it; it1.hasNext(); ) {
                String attribute = (String) it1.next();
                map.put(attribute,element.attributeValue(attribute));
            }
        }
        return listMenu;
    }
}
