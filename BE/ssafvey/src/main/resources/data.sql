-- insert into authority (authority_name) values ('ROLE_USER');
-- insert into authority (authority_name) values ('ROLE_ADMIN');

-- insert into user_authority (user_id, authority_name) values (1, 'ROLE_USER');
-- insert into user_authority (user_id, authority_name) values (1, 'ROLE_ADMIN');

-- select job from Member

-- insert into "members" (id, email) values ('1', 'dldbdud112@naver.com');

INSERT IGNORE INTO authority (authority_name) VALUES ('ROLE_USER');
INSERT IGNORE INTO authority (authority_name) VALUES ('ROLE_ADMIN');
--
-- insert into user_authority (user_id, authority_name) values (1, 'ROLE_USER');
-- insert into user_authority (user_id, authority_name) values (1, 'ROLE_ADMIN');

INSERT IGNORE INTO job VALUES (1, '전문직');
INSERT IGNORE INTO job VALUES (2,'경영/관리직');
INSERT IGNORE INTO job VALUES (3,'사무/기술직');
INSERT IGNORE INTO job VALUES (4,'판매/서비스직');
INSERT IGNORE INTO job VALUES (5,'기능/작업/단순노무직');
INSERT IGNORE INTO job VALUES (6,'농림어축산업');
INSERT IGNORE INTO job VALUES (7,'자영업');
INSERT IGNORE INTO job VALUES (8,'전업주부');
INSERT IGNORE INTO job VALUES (9,'학생');
INSERT IGNORE INTO job VALUES (10,'무직');
INSERT IGNORE INTO job VALUES (11,'기타');
