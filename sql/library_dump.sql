--
-- PostgreSQL database dump
--

-- Dumped from database version 14.0
-- Dumped by pg_dump version 14.0

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: library; Type: TABLE DATA; Schema: libs; Owner: postgres
--

COPY libs.library (id, rekvid, kood, nimetus, library, muud, properties, "timestamp", status, ajalugu) FROM stdin;
1	1	TEATIS              	Teatised                                                                                                                                                                                                                                                      	DOK                 	\N	{"type": "library", "module": ["juht"]}	2021-10-14 16:38:05.940579	1	\N
6	1	USERID              	Kasutaja andmed                                                                                                                                                                                                                                               	DOK                 	\N	{"type": "settings", "module": ["admin"]}	2021-10-14 16:38:06.164106	1	\N
7	1	ARVED_KOODI_JARGI   	Arved koodi järgi                                                                                                                                                                                                                                             	DOK                 	\N	{"type": "aruanne", "module": ["raama"]}	2021-10-14 16:38:06.183963	1	\N
4	1	REKV                	Oma asutuse andmed                                                                                                                                                                                                                                            	DOK                 	\N	{"type": "settings", "module": ["admin", "raama", "juht"]}	2021-10-14 16:38:06.035666	1	\N
5	1	CONFIG              	Konfiguratsioon                                                                                                                                                                                                                                               	DOK                 	\N	{"type": "settings", "module": ["admin", "raama", "juht"]}	2021-10-14 16:38:06.121506	1	\N
8	1	TAOTLUS_LOGIN       	Registreerimise taotlused                                                                                                                                                                                                                                     	DOK                 	\N	{"type": "document", "module": ["admin"]}	2021-10-15 07:35:02.055099	1	\N
9	1	OBJEKT              	Objektid                                                                                                                                                                                                                                                      	DOK                 	\N	{"type": "library", "module": ["raama", "juht", "kasutaja"]}	2021-10-18 09:52:06.915577	1	\N
10	1	ASUTUSED            	Kliendid                                                                                                                                                                                                                                                      	DOK                 	\N	{"type": "library", "module": ["raama", "juht"]}	2021-10-18 10:13:15.189747	1	\N
11	1	LEPING              	Lepingud                                                                                                                                                                                                                                                      	DOK                 	\N	{"type": "document", "module": ["kasutaja", "raama", "juht"]}	2021-10-19 17:50:43.811366	1	\N
12	1	NOMENCLATURE        	Teenused                                                                                                                                                                                                                                                      	DOK                 	\N	{"type": "library", "module": ["raama", "juht"]}	2021-10-19 19:12:23.577134	1	\N
13	1	ANDMED              	Mõõdukiri andmed                                                                                                                                                                                                                                              	DOK                 	\N	{"type": "document", "module": ["kasutaja", "raama", "juht"]}	2021-10-20 18:55:31.12701	1	\N
2	1	ARV                 	Arved                                                                                                                                                                                                                                                         	DOK                 	\N	{"type": "document", "module": ["raama", "juht", "kasutaja"]}	2021-10-14 16:38:05.968084	1	\N
14	1	SMK                 	Sissemakse korraldused                                                                                                                                                                                                                                        	DOK                 	\N	{"type": "document", "module": ["raama"]}	2021-10-24 15:28:33.38833	1	\N
15	1	VMK                 	Väljamakse korraldused                                                                                                                                                                                                                                        	DOK                 	\N	{"type": "document", "module": ["raama"]}	2021-10-24 19:04:06.526218	1	\N
16	1	SORDER              	Sissemakse kassaorder                                                                                                                                                                                                                                         	DOK                 	\N	{"type": "document", "module": ["raama"]}	2021-10-24 19:33:51.068261	1	\N
17	1	VORDER              	Väljamakse kassaorder                                                                                                                                                                                                                                         	DOK                 	\N	{"type": "document", "module": ["raama"]}	2021-10-24 19:33:51.185674	1	\N
18	1	REKL                	Reklaam                                                                                                                                                                                                                                                       	DOK                 	\N	{"type": "document", "module": ["juht"]}	2021-10-26 16:11:58.239213	1	\N
19	1	KAIVE_ARUANNE       	Käibearuanne                                                                                                                                                                                                                                                  	DOK                 	\N	{"type": "aruanne", "module": ["raama"]}	2021-10-27 19:22:00.85798	1	\N
20	1	ARVE_KOKKUVOTE      	Arve kokkuvõte                                                                                                                                                                                                                                                	DOK                 	\N	{"type": "aruanne", "module": ["raama"]}	2021-12-29 21:15:53.473381	1	\N
21	1	JOURNAL             	Lausendid                                                                                                                                                                                                                                                     	DOK                 	\N	{"type": "document", "module": ["raama"]}	2022-02-28 07:23:41.336782	1	\N
22	1	KONTOD              	Kontoplaan                                                                                                                                                                                                                                                    	DOK                 	\N	{"type": "library", "module": ["raama"]}	2022-02-28 09:00:09.063517	1	\N
23	1	100                 	Kassa                                                                                                                                                                                                                                                         	KONTOD              	\N	{"tun5": 1, "valid": null, "kas_virtual": 0}	2022-02-28 16:59:48.316786	1	\N
24	1	xxx                 	test del                                                                                                                                                                                                                                                      	KONTOD              	\N	{"tun5": 2, "valid": null, "kas_virtual": 0}	2022-02-28 17:19:09.411183	3	\N
25	1	TUNNUS              	Lausendi tunnused                                                                                                                                                                                                                                             	DOK                 	\N	{"type": "library", "module": ["raama"]}	2022-03-04 08:50:25.233533	1	\N
26	1	tun1                	tun 1 nimetus                                                                                                                                                                                                                                                 	TUNNUS              	Muud	{"valid": null}	2022-03-04 11:09:20.721722	3	\N
27	1	tun2                	tun2 nimetus                                                                                                                                                                                                                                                  	TUNNUS              	\N	{"valid": null}	2022-03-04 11:12:06.119592	1	\N
28	1	PROJECT             	Projektid                                                                                                                                                                                                                                                     	DOK                 	\N	{"type": "library", "module": ["raama"]}	2022-03-04 11:26:37.895577	1	\N
29	1	proj                	Proj nimetus                                                                                                                                                                                                                                                  	PROJ                	\N	{"valid": "2022-03-31"}	2022-03-04 13:52:54.990093	3	\N
30	1	KAIBEANDMIK         	Raamatupidaja käibeandmik                                                                                                                                                                                                                                     	DOK                 	\N	{"type": "aruanne", "module": ["raama"]}	2022-03-05 08:22:44.204644	1	\N
31	1	KONTOANDMIK         	Raamatupidaja kontoandmik                                                                                                                                                                                                                                     	DOK                 	\N	{"type": "aruanne", "module": ["raama"]}	2022-03-05 15:52:49.747875	1	\N
\.


--
-- Name: library_id_seq; Type: SEQUENCE SET; Schema: libs; Owner: postgres
--

SELECT pg_catalog.setval('libs.library_id_seq', 31, true);


--
-- PostgreSQL database dump complete
--

