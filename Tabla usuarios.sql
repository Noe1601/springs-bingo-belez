CREATE TABLE public."Code"
(
	"CODE" INTEGER PRIMARY KEY NOT NULL
);

ALTER TABLE IF EXISTS public."Code"
    OWNER to postgres;


CREATE TABLE public."Users"
(
    "ID" SERIAL NOT NULL,
    PRIMARY KEY ("ID"),
	"NAME" VARCHAR(100) NOT NULL,
	"EMAIL" VARCHAR(100) NOT NULL,
	"ROLE" VARCHAR(100) NOT NULL,
	"PASSWORD" VARCHAR(100) NOT NULL,
	"CODE" INTEGER REFERENCES public."Code"("CODE")
);

ALTER TABLE IF EXISTS public."Users"
    OWNER to postgres;
	
	
DROP TABLE public."Code"