# Восьмая домашняя работа

## Были добавлены отзывы-посты
### GraphQL
С помощью useQuery клиент получает посты, с помощью useMutation на gql-сервер отсылается новый пост.
### WebSockets
После того, как на gql-сервер был отослан новый пост, клиент отсылает уведомление об этом на ws-сервер. Ws-сервер рассылает уведомления всем клиентам о необходимости обновить список постов (refetch от useQuery).

## Вход
### login: admin
### password: 123

## Серверы
### gql: https://github.com/otus-vue/graphql-server/tree/vue-2022-12
### ws: https://github.com/Lina-WF/socket-server