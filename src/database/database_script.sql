CREATE TABLE User(
                     user_id INTEGER PRIMARY KEY,
                     email varchar[200],
                     first_name varchar[200],
                     last_name varchar[200],
                     username varchar[200],
                     enrollment_date varchar[10],
                     premium_user boolean,
                     phone_number varchar[10]);

CREATE TABLE Holdings(
                         holding_id INTEGER PRIMARY KEY,
                         user_id INTEGER,
                         crypto_symbol varchar[10],
                         buy_price real,
                         quantity real,
                         buy_date varchar[10],
                         profit_target real,
                         FOREIGN KEY (user_id) REFERENCES User(user_id),
                         FOREIGN KEY (crypto_symbol) REFERENCES Crypto(crypto_symbol)
);

CREATE TABLE Crypto(
                       crypto_symbol varchar[10] PRIMARY KEY,
                       price real
);

INSERT INTO User(email,first_name,last_name,username,enrollment_date,premium_user)
VALUES
    ('BmxFreestyle@gmail.com','Tyler','Unsworth','BmxFreestyle','04-27-2022',1),
    ('Zachary.Cushon@gmail.com','Zach','Cushon','HiImZach','04-26-2022',0),
    ('Lena.WebDev@gmail.com','Lena','Webdev','LenaTheDev','03-27-2022',1),
    ('Embert@gmail.com','Embert','theMan','Verspar','06-12-2021',1);

INSERT INTO Crypto(crypto_symbol, price)
VALUES
    ('BTC',39150),
    ('ADA',.8397),
    ('CRO',.3892),
    ('MATIC',1.26),
    ('GALA',0.1691),
    ('LRC',.8443);

select * from Crypto;

INSERT INTO Holdings(user_id, crypto_symbol, buy_price, quantity,buy_date)
VALUES
    (2, 'ADA',.82,50,'04-24-2022'),
    (2,'BTC',39150,1,'04-24-2022'),
    (2,'CRO',.40,20.4,'04-24-2022'),
    (2,'MATIC',1.48,108.56,'04-24-2022'),
    (1,'CRO',.48,19.56,'04-24-2022'),
    (2,'ADA',1.28,13.36,'04-24-2022'),
    (1,'MATIC',1.48,24.56,'04-24-2022'),
    (2,'MATIC',1.4,108.56,'04-20-2022'),
    (4,'LRC',.88,10.56,'02-14-2022'),
    (5,'CRO',.48,108.56,'04-24-2022'),
    (4,'BTC',115,108.56,'01-14-2012'),
    (3,'ADA',1.2,108.56,'12-24-2021');

select * from Holdings



Drop table Holdings

select first_name,quantity,crypto_symbol,buy_price from Holdings
INNER JOIN User U on U.user_id = Holdings.user_id
where first_name = "Embert"
