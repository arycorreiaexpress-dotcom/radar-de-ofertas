# Radar de Ofertas
Site estático sem dependências. Cloudflare Pages: conectar este repositório, branch main, sem comando de build, diretório de saída raiz (.). 
## Integração
Criar planilha separada, aba Ofertas, com colunas nessa ordem: produto, categoria, plataforma, preco, cupom, imagem, link, validade, status. Usar preços numéricos, links HTTPS autorizados, datas reais ou yyyy-MM-dd e status Ativa somente após validação. Não incluir informações pessoais.
Copiar integracao/Code.gs para Apps Script ligado à planilha, substituir ID, implantar como aplicativo web executado pelo proprietário, acesso público se permitido. Colocar URL /exec em config.js. Testar resposta JSON e carregamento no domínio publicado. 
Nenhuma oferta fictícia é exibida. Não inserir senhas ou tokens no repositório.