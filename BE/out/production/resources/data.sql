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