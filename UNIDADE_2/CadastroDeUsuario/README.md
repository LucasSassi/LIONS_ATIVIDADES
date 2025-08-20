LUCAS SASSI DE SOUZA

Módulo Principal e Navegação:

    O sistema deve exibir um menu principal com as opções disponíveis: Adicionar, Listar, Atualizar, Deletar e Sair.

    Após a conclusão de uma operação (como adicionar ou listar), o sistema deve retornar ao menu principal.

    O sistema deve possuir uma opção para encerrar a aplicação.

    O sistema deve tratar entradas inválidas no menu (ex: letras ou números fora do intervalo de opções) e solicitar ao usuário que tente novamente.

Módulo de Adição de Usuário (Create):

    O sistema deve permitir o cadastro de um novo usuário.

    O sistema deve solicitar e armazenar o nome do usuário.

    O sistema deve solicitar e armazenar um ou mais números de telefone para o usuário.

    O sistema deve solicitar e armazenar um endereço de e-mail para o usuário.

    O sistema deve gerar um ID único para cada novo usuário cadastrado através do timestamp.

    O sistema deve exibir uma mensagem de sucesso após a adição do usuário.

    O sistema exibe uma mensagem de erro caso ja tenha um email cadastrado ja exista.

Módulo de Listagem de Usuários:

    O sistema deve ser capaz de listar todos os usuários cadastrados.

    A listagem deve exibir o ID, nome, telefones e e-mail de cada usuário.

    Os números de telefone na listagem devem ser formatados para melhor legibilidade (ex: (XX)XXXXX-XXXX).

    Se não houver usuários cadastrados, o sistema deve exibir uma mensagem informativa.

Módulo de Atualização de Usuário (Update):

    O sistema deve permitir a atualização dos dados de um usuário existente.

    A seleção do usuário para atualização deve ser feita através de seu ID.

    O sistema deve exibir a lista de usuários antes de solicitar o ID, para que o usuário saiba qual ID selecionar.

    O sistema deve permitir a edição do nome, dos telefones (adicionar, remover ou alterar) e do e-mail.

    O usuário deve ter a opção de pular a edição de um campo (ex: deixar em branco para não alterar o nome).

    O sistema deve validar se um ID fornecido para atualização é válido. Caso não seja, deve informar o usuário e permitir uma nova tentativa.

    O sistema exibe uma mensagem de erro caso ja tenha um email editado ja exista.

Módulo de Remoção de Usuário (Delete):

    O sistema deve permitir a exclusão de um usuário existente.

    A seleção do usuário para exclusão deve ser feita através de seu ID.

    O sistema deve exibir uma mensagem de sucesso após a exclusão.

    O sistema deve validar se um ID fornecido para exclusão é válido. Caso não seja, deve informar o usuário e permitir uma nova tentativa.