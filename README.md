# backend-agustinus-ignat-deswanto

A. Persiapan
	 1. Cek file yang dibutuhkan didalam folder utils
	 2. Lakukan import 2 file json kedalam postman yaitu Aman Tekno Solusi.postman_collection.json dan ATS.postman_environment.json
	 3. Collection postman bernama Aman Tekno Solusi dan Environmentnya bernama ATS
	 4. Lakukan import 3 file sql kedalam database MySQL yaitu product.sql, transaction_customer.sql dan transaction_item.sql
	 
B. API Token
	 1. Generate token menggunakan API /auth/token
	 2. Dapat menggunakan postman dibagian Auth - Generate Token
	 3. Token yang terbentuk akan otomatis disimpan di environment ATS
	 4. Token mempunyai masa aktif atau masa berlaku
	 
C. API Merchant
	 1. Untuk mengakses semua API merchant dibutuhkan token
	 2. Generate token terlebih (lihat langkah B)
	 3. Semua API dapat dilihat menggunakan postman di bagian Merchant
	 4. API merchant terdiri dari beberapa request seperti Get data, List data, create data, update data dan delete data
	 
D. API Customer
	 1. Untuk mengakses semua API customer dibutuhkan token
	 2. Generate token terlebih (lihat langkah B)
	 3. Semua API dapat dilihat menggunakan postman di bagian Customer
	 4. API customer terdiri dari beberapa request seperti Get transaction, List transaction dan create transaction
	 5. API customer juga terdiri dari beberapa request seperti Get item transaction dan List item transaction
