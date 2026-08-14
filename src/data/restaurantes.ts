import type { Restaurante } from "../types"

import capaHorta from "../assets/capas/horta-urbana.svg"
import capaRaiz from "../assets/capas/raiz-brasil.svg"
import capaBowl from "../assets/capas/bowl-do-mar.svg"
import capaNonna from "../assets/capas/nonna-verde.svg"
import capaKome from "../assets/capas/kome-vegano.svg"
import capaDoce from "../assets/capas/doce-broto.svg"

import horta1 from "../assets/pratos/horta-urbana-1.svg"
import horta2 from "../assets/pratos/horta-urbana-2.svg"
import horta3 from "../assets/pratos/horta-urbana-3.svg"
import horta4 from "../assets/pratos/horta-urbana-4.svg"
import horta5 from "../assets/pratos/horta-urbana-5.svg"
import horta6 from "../assets/pratos/horta-urbana-6.svg"

import raiz1 from "../assets/pratos/raiz-brasil-1.svg"
import raiz2 from "../assets/pratos/raiz-brasil-2.svg"
import raiz3 from "../assets/pratos/raiz-brasil-3.svg"
import raiz4 from "../assets/pratos/raiz-brasil-4.svg"
import raiz5 from "../assets/pratos/raiz-brasil-5.svg"
import raiz6 from "../assets/pratos/raiz-brasil-6.svg"

import bowl1 from "../assets/pratos/bowl-do-mar-1.svg"
import bowl2 from "../assets/pratos/bowl-do-mar-2.svg"
import bowl3 from "../assets/pratos/bowl-do-mar-3.svg"
import bowl4 from "../assets/pratos/bowl-do-mar-4.svg"
import bowl5 from "../assets/pratos/bowl-do-mar-5.svg"
import bowl6 from "../assets/pratos/bowl-do-mar-6.svg"

import nonna1 from "../assets/pratos/nonna-verde-1.svg"
import nonna2 from "../assets/pratos/nonna-verde-2.svg"
import nonna3 from "../assets/pratos/nonna-verde-3.svg"
import nonna4 from "../assets/pratos/nonna-verde-4.svg"
import nonna5 from "../assets/pratos/nonna-verde-5.svg"
import nonna6 from "../assets/pratos/nonna-verde-6.svg"

import kome1 from "../assets/pratos/kome-vegano-1.svg"
import kome2 from "../assets/pratos/kome-vegano-2.svg"
import kome3 from "../assets/pratos/kome-vegano-3.svg"
import kome4 from "../assets/pratos/kome-vegano-4.svg"
import kome5 from "../assets/pratos/kome-vegano-5.svg"
import kome6 from "../assets/pratos/kome-vegano-6.svg"

import doce1 from "../assets/pratos/doce-broto-1.svg"
import doce2 from "../assets/pratos/doce-broto-2.svg"
import doce3 from "../assets/pratos/doce-broto-3.svg"
import doce4 from "../assets/pratos/doce-broto-4.svg"
import doce5 from "../assets/pratos/doce-broto-5.svg"
import doce6 from "../assets/pratos/doce-broto-6.svg"

const restaurantes: Restaurante[] = [
	{
		id: 1,
		titulo: "Horta Urbana",
		destacado: true,
		tipo: "Comida de horta",
		avaliacao: 4.9,
		capa: capaHorta,
		descricao:
			"Colhido de manhã, servido no almoço. A Horta Urbana trabalha com produtores da cidade e monta pratos sazonais 100% vegetais. Nada de ultraprocessado, nada de desperdício. Entrega em embalagem retornável.",
		cardapio: [
			{
				id: 101,
				nome: "Bowl da Estação",
				foto: horta1,
				preco: 42.9,
				porcao: "1 pessoa",
				descricao:
					"Grãos integrais, legumes assados do dia, folhas frescas da horta, grão-de-bico crocante e molho de tahine com limão siciliano. O recheio muda conforme a colheita da semana.",
			},
			{
				id: 102,
				nome: "Caponata de Berinjela",
				foto: horta2,
				preco: 38.5,
				porcao: "1 a 2 pessoas",
				descricao:
					"Berinjela, tomate, pimentão e alcaparras cozidos lentamente no azeite, com um toque de vinagre balsâmico. Servida morna, acompanhada de pão de fermentação natural.",
			},
			{
				id: 103,
				nome: "Sopa de Abóbora e Gengibre",
				foto: horta3,
				preco: 32.0,
				porcao: "1 pessoa",
				descricao:
					"Abóbora cabotiá assada, gengibre fresco e leite de coco, finalizada com sementes de abóbora tostadas e azeite de ervas. Cremosa sem levar nenhum derivado de leite.",
			},
			{
				id: 104,
				nome: "Salada de Grãos Antigos",
				foto: horta4,
				preco: 36.9,
				porcao: "1 pessoa",
				descricao:
					"Quinoa, trigo sarraceno e lentilha beluga com pepino, hortelã, romã e vinagrete de mostarda. Leve, proteica e boa também no dia seguinte.",
			},
			{
				id: 105,
				nome: "Legumes na Brasa",
				foto: horta5,
				preco: 45.0,
				porcao: "2 pessoas",
				descricao:
					"Cenoura, abobrinha, cebola roxa e cogumelos grelhados na brasa, com chimichurri de salsinha e farofa de castanha-do-pará.",
			},
			{
				id: 106,
				nome: "Torta de Alho-poró",
				foto: horta6,
				preco: 34.5,
				porcao: "1 a 2 pessoas",
				descricao:
					"Massa amanteigada feita com azeite, recheio cremoso de alho-poró e castanha de caju batida, assada até dourar. Servida com salada de folhas.",
			},
		],
	},
	{
		id: 2,
		titulo: "Raiz Brasil",
		destacado: false,
		tipo: "Brasileira",
		avaliacao: 4.7,
		capa: capaRaiz,
		descricao:
			"Comida brasileira de raiz, sem nenhum ingrediente de origem animal. Feijoada de legumes, moquecas de dendê e doces de tacho. O sabor da casa da avó, na versão vegetal.",
		cardapio: [
			{
				id: 201,
				nome: "Feijoada Vegana",
				foto: raiz1,
				preco: 52.9,
				porcao: "2 pessoas",
				descricao:
					"Feijão-preto cozido com legumes defumados no páprica, tofu marinado e cogumelo paris. Vem com arroz, couve refogada, farofa de banana e laranja.",
			},
			{
				id: 202,
				nome: "Moqueca de Banana-da-terra",
				foto: raiz2,
				preco: 56.0,
				porcao: "2 pessoas",
				descricao:
					"Banana-da-terra, pimentões e tomate cozidos no leite de coco com azeite de dendê e coentro. Acompanha arroz branco e pirão de mandioca.",
			},
			{
				id: 203,
				nome: "Escondidinho de Aipim",
				foto: raiz3,
				preco: 44.5,
				porcao: "1 a 2 pessoas",
				descricao:
					"Purê cremoso de aipim gratinado sobre ragu de proteína de ervilha e cebola caramelizada. Confortante do primeiro ao último garfo.",
			},
			{
				id: 204,
				nome: "Bobó de Palmito",
				foto: raiz4,
				preco: 49.9,
				porcao: "2 pessoas",
				descricao:
					"Palmito pupunha em creme de mandioca com leite de coco e dendê, temperado com coentro fresco. Servido com arroz e farofa crocante.",
			},
			{
				id: 205,
				nome: "Bolinho de Feijoada",
				foto: raiz5,
				preco: 28.0,
				porcao: "8 unidades",
				descricao:
					"Massa de feijão-preto empanada e frita, recheada com couve e tofu defumado. Vem com molho de pimenta artesanal da casa.",
			},
			{
				id: 206,
				nome: "Curau de Milho Verde",
				foto: raiz6,
				preco: 22.5,
				porcao: "1 pessoa",
				descricao:
					"Milho verde batido com leite de coco e cozido lentamente, polvilhado com canela. Doce de tacho, sem leite condensado.",
			},
		],
	},
	{
		id: 3,
		titulo: "Bowl do Mar",
		destacado: true,
		tipo: "Poke & bowls",
		avaliacao: 4.8,
		capa: capaBowl,
		descricao:
			"Sabor de maresia sem tirar nada do mar. Trabalhamos algas, tomate curado e cogumelos para recriar texturas marinhas em bowls frescos, montados na hora do pedido.",
		cardapio: [
			{
				id: 301,
				nome: "Poke Havaiano",
				foto: bowl1,
				preco: 46.9,
				porcao: "1 pessoa",
				descricao:
					"Arroz de sushi, tomate curado em shoyu e alga nori, edamame, pepino, abacate, cebola roxa e gergelim. Finalizado com maionese de castanha e sriracha.",
			},
			{
				id: 302,
				nome: "Bowl de Grão-de-bico",
				foto: bowl2,
				preco: 41.0,
				porcao: "1 pessoa",
				descricao:
					"Grão-de-bico assado com cúrcuma, arroz sete grãos, cenoura em conserva, rúcula e molho de iogurte de coco com endro.",
			},
			{
				id: 303,
				nome: "Ceviche de Cogumelos",
				foto: bowl3,
				preco: 39.5,
				porcao: "1 pessoa",
				descricao:
					"Cogumelos eryngui marinados em leite de tigre vegetal, com cebola roxa, coentro, milho cancha e batata-doce. Ácido, fresco e picante na medida.",
			},
			{
				id: 304,
				nome: "Bowl Verde",
				foto: bowl4,
				preco: 38.0,
				porcao: "1 pessoa",
				descricao:
					"Folhas, brócolis no vapor, ervilha torta, abacate e quinoa, com molho verde de manjericão e castanha de caju.",
			},
			{
				id: 305,
				nome: "Temaki de Palmito",
				foto: bowl5,
				preco: 26.9,
				porcao: "2 unidades",
				descricao:
					"Cone de nori com arroz temperado, palmito desfiado em molho tarê e cebolinha. Simples e muito bem executado.",
			},
			{
				id: 306,
				nome: "Bowl de Manga e Tofu",
				foto: bowl6,
				preco: 43.5,
				porcao: "1 pessoa",
				descricao:
					"Tofu grelhado em shoyu e mel de agave, manga fresca, repolho roxo, amendoim e arroz jasmim. Doce e salgado no mesmo garfo.",
			},
		],
	},
	{
		id: 4,
		titulo: "Nonna Verde",
		destacado: false,
		tipo: "Italiana",
		avaliacao: 4.6,
		capa: capaNonna,
		descricao:
			"Massa fresca feita todo dia com semolina e água, sem ovo. Molhos que cozinham por horas, queijos de castanha curados na casa e pizza de fermentação lenta de 48 horas.",
		cardapio: [
			{
				id: 401,
				nome: "Ravioli de Abóbora",
				foto: nonna1,
				preco: 54.0,
				porcao: "1 a 2 pessoas",
				descricao:
					'Massa fresca recheada com abóbora assada e noz-moscada, servida na manteiga vegetal de sálvia com nozes tostadas e "parmesão" de castanha.',
			},
			{
				id: 402,
				nome: "Lasanha à Bolonhesa",
				foto: nonna2,
				preco: 58.9,
				porcao: "2 pessoas",
				descricao:
					"Camadas de massa fresca, ragu de lentilha cozido por três horas e bechamel de leite de castanha, gratinada até formar crosta.",
			},
			{
				id: 403,
				nome: "Pizza Marguerita",
				foto: nonna3,
				preco: 49.9,
				porcao: "2 a 3 pessoas",
				descricao:
					"Fermentação natural de 48 horas, molho de tomate San Marzano, muçarela de castanha de caju, manjericão fresco e azeite extravirgem.",
			},
			{
				id: 404,
				nome: "Gnocchi de Batata",
				foto: nonna4,
				preco: 47.5,
				porcao: "1 a 2 pessoas",
				descricao:
					"Nhoque leve de batata asterix ao sugo de tomate fresco com alho confitado e um fio de azeite de manjericão.",
			},
			{
				id: 405,
				nome: "Bruschetta da Casa",
				foto: nonna5,
				preco: 29.0,
				porcao: "4 unidades",
				descricao:
					"Pão de fermentação natural tostado no azeite, tomate marinado, alho, orégano fresco e ricota de amêndoas.",
			},
			{
				id: 406,
				nome: "Tiramisù Vegano",
				foto: nonna6,
				preco: 31.9,
				porcao: "1 pessoa",
				descricao:
					"Biscoito embebido em café coado na hora, creme de castanha de caju e baunilha, cacau em pó por cima. Gelado e nada enjoativo.",
			},
		],
	},
	{
		id: 5,
		titulo: "Kome Vegano",
		destacado: false,
		tipo: "Japonesa",
		avaliacao: 4.8,
		capa: capaKome,
		descricao:
			"Cozinha japonesa vegetal com técnica de verdade. Dashi de kombu e shiitake, missô fermentado na casa e legumes tratados com o mesmo respeito que se dá ao peixe.",
		cardapio: [
			{
				id: 501,
				nome: "Combinado Kome",
				foto: kome1,
				preco: 68.0,
				porcao: "2 pessoas",
				descricao:
					"Dezesseis peças: uramaki de abacate, hossomaki de pepino, niguiri de tomate curado e de shiitake grelhado. Acompanha shoyu, gengibre e wasabi.",
			},
			{
				id: 502,
				nome: "Ramen de Missô",
				foto: kome2,
				preco: 52.5,
				porcao: "1 pessoa",
				descricao:
					"Caldo de kombu e shiitake fervido por seis horas com missô vermelho, macarrão fresco, milho, broto de feijão, nori e óleo de alho negro.",
			},
			{
				id: 503,
				nome: "Gyoza de Cogumelos",
				foto: kome3,
				preco: 34.9,
				porcao: "6 unidades",
				descricao:
					"Pastelzinho selado na chapa com recheio de shiitake, repolho e gengibre. Servido com molho de shoyu, vinagre de arroz e óleo de pimenta.",
			},
			{
				id: 504,
				nome: "Yakisoba de Legumes",
				foto: kome4,
				preco: 44.0,
				porcao: "1 a 2 pessoas",
				descricao:
					"Macarrão salteado em fogo alto com brócolis, cenoura, acelga e cogumelos, ao molho tarê da casa. Salteado na hora, nunca pré-pronto.",
			},
			{
				id: 505,
				nome: "Tempurá de Legumes",
				foto: kome5,
				preco: 38.5,
				porcao: "1 a 2 pessoas",
				descricao:
					"Abóbora, batata-doce, vagem e shiitake em massa leve de tempurá, fritos rapidamente. Vem com molho tentsuyu e nabo ralado.",
			},
			{
				id: 506,
				nome: "Mochi de Matchá",
				foto: kome6,
				preco: 24.9,
				porcao: "3 unidades",
				descricao:
					"Massa de arroz glutinoso recheada com creme gelado de matchá e leite de aveia. Delicado e não muito doce.",
			},
		],
	},
	{
		id: 6,
		titulo: "Doce Broto",
		destacado: false,
		tipo: "Confeitaria",
		avaliacao: 4.9,
		capa: capaDoce,
		descricao:
			"Confeitaria sem ovo, sem leite e sem meio-termo. Bolos altos, tortas geladas e cookies com chocolate 70%. Feitos por encomenda e entregues no mesmo dia do forno.",
		cardapio: [
			{
				id: 601,
				nome: "Bolo de Cenoura com Ganache",
				foto: doce1,
				preco: 39.9,
				porcao: "4 fatias",
				descricao:
					"Massa fofinha de cenoura com azeite, coberta com ganache de chocolate 70% e leite de coco. A cobertura fica cremosa mesmo depois de gelada.",
			},
			{
				id: 602,
				nome: "Torta de Limão",
				foto: doce2,
				preco: 42.0,
				porcao: "4 fatias",
				descricao:
					"Base crocante de castanha e tâmara, creme de limão-taiti com leite de coco e merengue de aquafaba maçaricado na hora.",
			},
			{
				id: 603,
				nome: "Cookies de Chocolate",
				foto: doce3,
				preco: 26.5,
				porcao: "6 unidades",
				descricao:
					"Bordas crocantes, centro macio e pedaços generosos de chocolate 70%. Levam açúcar mascavo e flor de sal por cima.",
			},
			{
				id: 604,
				nome: "Brownie de Feijão-preto",
				foto: doce4,
				preco: 29.9,
				porcao: "4 unidades",
				descricao:
					"Denso, úmido e sem farinha de trigo. O feijão dá a estrutura e some no sabor. Fica só o chocolate e a noz-pecã.",
			},
			{
				id: 605,
				nome: "Cheesecake de Frutas Vermelhas",
				foto: doce5,
				preco: 45.5,
				porcao: "4 fatias",
				descricao:
					"Creme gelado de castanha de caju e baunilha sobre base de aveia, com calda de amora e framboesa feita na panela.",
			},
			{
				id: 606,
				nome: "Pudim de Coco",
				foto: doce6,
				preco: 23.0,
				porcao: "1 pessoa",
				descricao:
					"Leite de coco e agar-agar com calda de açúcar queimado. Firme na colher e derretendo na boca, como pudim tem que ser.",
			},
		],
	},
]

export default restaurantes
