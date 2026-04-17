-- Limpando dados existentes para evitar duplicatas
DELETE FROM public.professionals;

-- Inserindo especialistas de exemplo com dados reais e fotos de alta qualidade
INSERT INTO public.professionals (nome, foto_url, cidade, especialidade, procedimentos, avaliacao, descricao, whatsapp_number, destaque)
VALUES 
(
  'Dr. Ricardo Alencar', 
  'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800', 
  'São Paulo, SP', 
  'Harmonização Facial', 
  ARRAY['Preenchimento Labial', 'MD Codes', 'Rinomodelação'], 
  5.0, 
  'Especialista em anatomia facial com mais de 15 anos de experiência internacional. Focado em resultados naturais e elegância estrutural.', 
  '5511999999999', 
  true
),
(
  'Dra. Beatriz Soares', 
  'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=800', 
  'Rio de Janeiro, RJ', 
  'Bioestimuladores', 
  ARRAY['Sculptra', 'Radiesse', 'Ultraformer III'], 
  4.9, 
  'Referência em rejuvenescimento preventivo e estímulo de colágeno. Criadora do protocolo Glow Skin para peles maduras.', 
  '5521988888888', 
  true
),
(
  'Dr. Marcus Vinícius', 
  'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800', 
  'Curitiba, PR', 
  'Rinomodelação', 
  ARRAY['Rinomodelação Estruturada', 'Fios de PDO', 'Botox'], 
  4.8, 
  'Especialista em procedimentos minimamente invasivos. Conhecido pela precisão técnica e atendimento humanizado de alto padrão.', 
  '5541977777777', 
  false
),
(
  'Dra. Helena Luz', 
  'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800', 
  'Belo Horizonte, MG', 
  'Toxina Botulínica', 
  ARRAY['Botox Full Face', 'Lipo de Papada', 'Skinbooster'], 
  5.0, 
  'Mestre em estética avançada. Sua filosofia de trabalho baseia-se na preservação da identidade e realce da beleza individual.', 
  '5531966666666', 
  true
);