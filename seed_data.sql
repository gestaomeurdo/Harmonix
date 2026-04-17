-- Atualizando Dra. Beatriz Cavalcante
UPDATE public.professionals 
SET 
  formacoes = ARRAY[
    'Graduação em Medicina pela USP', 
    'Residência em Dermatologia no Hospital das Clínicas', 
    'Especialização em Laser e Cosmiatria pela Sociedade Brasileira de Dermatologia',
    'Speaker Internacional de Bioestimuladores de Colágeno'
  ],
  endereco_completo = 'Av. Brigadeiro Faria Lima, 4500 - 12º Andar, Itaim Bibi, São Paulo - SP',
  galeria_resultados = '[
    {
      "titulo": "Harmonização Labial Natural", 
      "antes": "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=800", 
      "depois": "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800"
    },
    {
      "titulo": "Tratamento de Olheiras com Ácido Hialurônico", 
      "antes": "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800", 
      "depois": "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=800"
    }
  ]'::jsonb
WHERE nome = 'Dra. Beatriz Cavalcante';

-- Atualizando Dr. Marcus Vinícius
UPDATE public.professionals 
SET 
  formacoes = ARRAY[
    'Medicina pela UFRJ', 
    'Membro Titular da Sociedade Brasileira de Cirurgia Plástica (SBCP)', 
    'Especialista em Rinomodelação Estruturada',
    'Mestrado em Ciências Cirúrgicas'
  ],
  endereco_completo = 'Av. das Américas, 3500 - Bloco 4, Sala 210, Barra da Tijuca, Rio de Janeiro - RJ',
  galeria_resultados = '[
    {
      "titulo": "Rinomodelação sem Cortes", 
      "antes": "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=800", 
      "depois": "https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?q=80&w=800"
    }
  ]'::jsonb
WHERE nome = 'Dr. Marcus Vinícius';

-- Atualizando Dra. Helena Soares
UPDATE public.professionals 
SET 
  formacoes = ARRAY[
    'Doutorado em Estética Regenerativa pela UFPR', 
    'Pioneira na técnica de Full Face Rejuvenation', 
    'Autora do livro "A Arte da Proporção Áurea na Estética"',
    'Coordenadora de Cursos de Pós-graduação em Harmonização'
  ],
  endereco_completo = 'Rua Comendador Araújo, 143 - Batel, Curitiba - PR',
  galeria_resultados = '[
    {
      "titulo": "Full Face Rejuvenation", 
      "antes": "https://images.unsplash.com/photo-1526045478516-99145907023c?q=80&w=800", 
      "depois": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800"
    }
  ]'::jsonb
WHERE nome = 'Dra. Helena Soares';

-- Atualizando Dr. Ricardo Almeida
UPDATE public.professionals 
SET 
  formacoes = ARRAY[
    'Odontologia pela UFMG', 
    'Especialista em Harmonização Orofacial', 
    'Membro da Associação Brasileira de Odontologia'
  ],
  endereco_completo = 'Rua da Bahia, 1200 - Lourdes, Belo Horizonte - MG',
  galeria_resultados = '[]'::jsonb
WHERE nome = 'Dr. Ricardo Almeida';