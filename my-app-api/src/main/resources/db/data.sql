INSERT INTO Services(service, description, price) VALUES('Autobusiuko pervezimas', ' PASLAUGOS APRASYMAS: sita paslauga kazka daro', 12.50);
INSERT INTO Services(service, description, price) VALUES('Sunkvezimio pervezimas', ' PASLAUGOS APRASYMAS: sita paslauga kazka daro', 12.50);
INSERT INTO Services(service, description, price) VALUES('Fiskaro pervezimas', ' PASLAUGOS APRASYMAS: sita paslauga kazka daro', 12.50);
INSERT INTO Services(service, description, price) VALUES('Traukinio pervezimas', ' PASLAUGOS APRASYMAS: sita paslauga kazka daro', 12.50);
INSERT INTO Services(service, description, price) VALUES('Saldytuvo pervezimas', ' PASLAUGOS APRASYMAS: sita paslauga kazka daro', 12.50);

INSERT INTO Users(user_id, username, password, name, last_name)
VALUES(1, 'user', '{bcrypt}$2y$12$HSbkp5aIVMkrOR5jvoXXUOInneduPHIlwvhs.4Z1TGMakFtiUOToq', 'Jack', 'Sparrow');
INSERT INTO Users(user_id, username, password, name, last_name)
VALUES(2, 'admin', '{bcrypt}$2y$12$HSbkp5aIVMkrOR5jvoXXUOInneduPHIlwvhs.4Z1TGMakFtiUOToq', 'Jack', 'Sparrow');

INSERT INTO Roles(role_id, role) VALUES(1, 'CUSTOMER');
INSERT INTO Roles(role_id, role) VALUES(2, 'ADMIN');

INSERT INTO Users_Roles(user_id, role_id) VALUES(1, 1);
INSERT INTO Users_Roles(user_id, role_id) VALUES(2, 2);