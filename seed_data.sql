-- Limpa dados existentes (opcional)
-- DELETE FROM public.professionals;

-- Insere profissionais de elite
INSERT INTO public.professionals (nome, foto_url, cidade, especialidade, procedimentos, avaliacao, descricao, whatsapp_number, destaque)
VALUES 
(
  'Dra. Beatriz Cavalcante', 
  'https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1000&auto=format&fit=crop', 
  'São Paulo, SP', 
  'Dermatologia Estética', 
  ARRAY['Botox', 'Preenchimento Labial', 'Bioestimuladores'], 
  5.0, 
  'Especialista em rejuvenescimento natural com mais de 12 anos de experiência. Focada em realçar a beleza individual sem exageros.', 
  '5511999999999', 
  true
),
(
  'Dr. Marcus Vinícius', 
  'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1000&auto=format&fit=crop', 
  'Rio de Janeiro, RJ', 
  'Cirurgia Plástica', 
  ARRAY['Rinomodelação', 'Fios de PDO', 'Lipo de Papada'], 
  4.9, 
  'Referência nacional em procedimentos minimamente invasivos. Membro da Sociedade Brasileira de Cirurgia Plástica.', 
  '5521988888888', 
  true
),
(
  'Dra. Helena Soares', 
  'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1000&auto=format&fit=crop', 
  'Curitiba, PR', 
  'Harmonização Facial', 
  ARRAY['Preenchimento', 'Bioestimuladores', 'Botox'], 
  5.0, 
  'Pioneira em técnicas de estruturação facial avançada. Professora e palestrante internacional sobre estética regenerativa.', 
  '5541977777777', 
  true
),
(
  'Dr. Ricardo Almeida', 
  'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1000&auto=format&fit=crop', 
  'Belo Horizonte, MG', 
  'Odontologia Estética', 
  ARRAY['Lentes de Contato', 'Botox', 'Preenchimento'], 
  4.8, 
  'Especialista em sorrisos e proporção áurea facial. Unindo saúde bucal e estética de forma integrada.', 
  '5531966666666', 
  false
);