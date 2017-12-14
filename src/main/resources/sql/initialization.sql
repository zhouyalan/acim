# 创建数据库，并创建权限用户

#drop database acim;
#drop user acim@'%';


#CREATE DATABASE `acim` CHARACTER SET utf8;
#CREATE USER 'acim'@'%' IDENTIFIED BY 'acim';
#GRANT ALL PRIVILEGES ON acim.* TO 'acim'@'%';
#FLUSH PRIVILEGES;


CREATE TABLE `sys_user` (
  `sys_user_id` bigint(20) NOT NULL,
  `sys_user_login_name` varchar(45) NOT NULL,
  `sys_user_login_password` varchar(45) NOT NULL,
  `sys_user_is_delete` varchar(5) NOT NULL DEFAULT '--',
  `sys_user_register_datetime` datetime NOT NULL DEFAULT '1990-01-01 00:00:00',
  `sys_user_email` varchar(45) DEFAULT NULL,
  `sys_user_mobile` varchar(20) NOT NULL,
  `sys_user_other` varchar(200) NOT NULL DEFAULT '--',
  PRIMARY KEY (`sys_user_id`,`sys_user_mobile`)
) ENGINE=InnoDB DEFAULT CHARSET=big5;


insert  into `sys_user`(`sys_user_id`,`sys_user_login_name`,`sys_user_login_password`,`sys_user_is_delete`,`sys_user_register_datetime`,`sys_user_email`,`sys_user_mobile`) values (1,'YouMeek1','e10adc3949ba59abbe56e057f20f883e','N','2016-02-24 00:12:23','363379441@qq.com','13800000001');


