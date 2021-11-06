# Simple Rest API using Nodejs & Expressjs

### Cara menggunakan

-   Download repo ini
-   Jalankan command 'npm install'
-   Buat file '.env' dengan isinya adalah sebagai berikut
    -   'DB_CONNECT=<url_mongodb_connection>'
    -   'TOKEN_SECRET=<random_string>'
    -   'PORT=<port-yang-ingin-digunakan>'
-   Jalankan command 'npm start' dan server akan dimulai

### Routing URL

-   Base Url : 'https://localhost:<PORT>'
-   End Point 'users' : 'http://localhost:<PORT>/api/users'
    -   Register : 'http://localhost:<PORT>/api/users/register'
        -   Pada body data user harus dikirim dengan format json
            Contohnya: { username: 'admin', password: '12345' }
    -   Login : 'http://localhost:<PORT>/api/users/login'
        -   Pada body data user harus dikirim dengan format json
            Contohnya: { username: 'admin', password: '12345' }
        -   Setelah berhasil login akan didapatkan auth-token yang di mana harus token ini harus di bawa pada request-header dengan key 'auth-token' setiap melakukan request pada end point lain
-   End Point 'students' : 'http://localhost:<PORT>/api/students'
    Auth-token yang didapatkan setelah login harus diset pada request header 'auth-token'

### Teknologi

-   Node js
-   Express js
-   Mongodb
-   Json Web Token
