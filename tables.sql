CREATE TABLE "users" (
	"id" serial  NOT NULL PRIMARY KEY,
	"name" TEXT NOT NULL,
	"email" TEXT NOT NULL UNIQUE,
	"password" TEXT NOT NULL,
 "createdAt" TIMESTAMP DEFAULT NOW()
)

CREATE TABLE "links" (
	"id" serial NOT NULL PRIMARY KEY,
	"linkOriginal" TEXT NOT NULL,
	"linkEncurtado" TEXT NOT NULL UNIQUE,
	"acessos" integer NOT NULL DEFAULT 0,
	"userId" integer NOT NULL REFERENCES "users"("id"),
 "createdAt" TIMESTAMP DEFAULT NOW()
) 

CREATE TABLE "autorizacao" (
	"id" serial NOT NULL PRIMARY KEY,
	"userId" integer NOT NULL REFERENCES "users"("id"),
	"token" TEXT NOT NULL,
 "createdAt" TIMESTAMP DEFAULT NOW()
)