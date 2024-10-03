import jwt from 'jsonwebtoken';

interface User{
    email: string;
    password: string;
}

const privateKey = `-----BEGIN RSA PRIVATE KEY-----
MIIEpAIBAAKCAQEAgByAk/RZXvwYoJCOPXzeby5fHOEoc3q/ER5OUg2mriWrH/bt
2VT9kjJkPsgmqg1LJ+8YbVgarhnldlK2Z1d+/Ke3RilKD5c3H6NtMAkHwenUoFrX
GYGiOLmmOvt+YRPZ6lH1rcSMI00PW+SsYwEZTCQpghshf+uKoiOUrkUKed7Bfg7y
oVBCvnaKcu+L9mJtVEvqn7JGeUXF5wdeasfcU6tZHKvlZXTkMWDqZUo+YHwykQRQ
gMjUfDmPoJQNFTuPszXjpQAsATtb/W7o3fDrGPck38ymdrspOJJBQ28aegq0LA5S
Ph0zsb3l6UCYtwfnEua6M73DxofDtnP7giHpFwIDAQABAoIBADfftnhQ/tV9b6Q/
x7mrhzvIZrUqwkCzTTfDFveUepjDVwIm6Q97kOg9UBlNpAdQqvGsxuORpHlAVCKp
6mHh+EFrSHSyN1nbYrBKz6k+lwKM4C5b0CqQrla9KXHaFAF07frTaioyachPqJ40
erbnWMgrkWrsOE0ZRqp2iDcFZ49E6NDe0SCP/8uOq+StDtjP0iSx7NHVE2Ynh4Pq
lRLzdUW0n1bzbqN+pv2+rTZYxOCmurWpD728TYSQElo1GYVjw9uS41uFaZhqtDHi
rUiZJZsi2ecw5H5OqS8k3PExWvC7OxnjH65VvhrY+IrnYHG8wOou4wJqmezrs/Ny
/4G8bKECgYEAvVcVfrlshbuR0VT47W493TvTctfVBKkjHVSuywhSqrLLwCRZ6uX2
FiDKIsRGVbAxzZhciCCFTGthT7nRpaR2ZqVQJ4OulxZD2ogX1LD1vzVyfNJ3zRsl
kSSbHWKy1zhplankiuu17uQ2nRq+xukxZqhasPRjdIoZZb3BIPZ3hBECgYEArTb2
/6zyUzaxY93/VEH9k4DbQtLojtX1Kb7U2HFCBiuuI9nxN7BJe7mt59Fl07M5DTjk
fo82c/N0Hj2ote4FwGMXut9iSMf/mxF8mHV4XJ4qNvNcG0ZdhdOfVMLhkuL+q4Q6
6DSg7QsDZfhA5EVlDesiq+/wqoF6qAfFzkcYoqcCgYBz8lEqclhfqNaJ71Qk6b6e
rRU2na9IFF95hbMoiCc/exBE0L3zl/FT6a5/DdzYenZ1JZl8jxWyD4ve67bTjdwn
zZJBMGWJBkx1FaQqTlefSRacE7Ljen1N3bHTk+5a16Poz8oxvFiEO2KqYId1fbYP
3Ib1GCOTaUJWSJZtHiFgUQKBgQCnhjltHj9f68204MhJHWm6dy2Ye5MgUh5CuaXx
j9hjT2ukkOyTB5SKbRKc2hC5puTOvO+A19G6YwMzHD9HdWVqpGwW+GV+LrAvscHn
UfWO3gnGC6hRWMSq4fl/aNvxzEiyabjvS7c4iyZGQMvB+ru5smheEjmZLpEKYjoV
Pv28kQKBgQC1moXSOj94r3qH/Q2cEoYpbhTq6SYEX/IcX5DiVN4GXMgPeqXD+28o
Qbm7aPd1MC9Zc3E1etLZ/qWfhxgp/e9/lfTUpsNslrZYJk3sHcrwcSRLFfiNRKnn
c/4foD7W9YjlZlmXzDvs9pNxRGtD9y5vJh51NBNra/fRps27t1V7oQ==
-----END RSA PRIVATE KEY-----`

export async function generateJwToken(user: User) {
    const token = jwt.sign(JSON.stringify(user), privateKey, {algorithm: 'RS256'});
    return token;
}

export async function verifyToken(token: string){
    return null
}