# Week-04
## [Questions](https://lightda-tw.notion.site/20241002-W04-4-1132ceabc70c8048bbd2d228ad660156)
1. 在 Readme 中提供 instance 的 public IP，我會連線過去檢查，所以要保持主機是一直在啟動中
  - http://13.210.241.83/
2. 什麼是 instance type?<br>
   __計算資源__，包含 CPU, RAM, storage... 等等。
3. 什麼是 Nginx？有哪些用途與特性？
4. pm2 套件是什麼？有什麼用處？
    1. 如果不是使用 pm2，那就告訴我你是用哪一個、這個工具的用途，以及，你為什麼這樣選擇
5. 步驟 9 中提到的 `proxy` 是什麼意思？為什麼要透過 Nginx 來 `proxy` 到 Express 開發的 Web Server?
    1. 提示 `Reverse proxy` vs `Forward Proxy`
6. 在 readme 中提供步驟 9 的 Nginx 設定檔

    ```nginx
    server {
        listen 80 default_server;
        listen [::]:80 default_server;
        server_name 13.210.241.83;

        location / {
            proxy_pass http://localhost:3000;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
        }
    }
    ```

7. Security Group 是什麼？用途為何？有什麼設定原則嗎？
8. 什麼是 sudo? 為什麼有的時候需要加上 sudo，有時候不用？
9.  Nginx 的 Log 檔案在哪裡？你怎麼找到的？怎麼看 Nginx 的 Log？
10. 其他你在過程中遭遇的問題，有找到解答就記錄下來，沒有可以把問題放著，下次上課討論。如果沒有遇到任何問題，也可以回答「無」
11. 列出完成本作業時參考的資料
12. (optional) 如果你很初學，不放心自己的過程是否正確，可以紀錄過程，我會盡量幫忙看

## Notes
> [Step-by-Step Guide: Creating an EC2 Instance in AWS](https://www.linkedin.com/pulse/step-by-step-guide-creating-ec2-instance-aws-kapil-pattnaik/)

### What is EC2?
Amazon Elastic Compute Cloud (EC2) is a __web service__ provided by Amazon Web Services (AWS) that allows users to __rent virtual servers__ (referred to as "`instances`") on which they can run their applications. EC2 instances are essentially virtual machines that can be launched in the cloud and __scaled up or down as needed__. EC2 provides a wide range of instance types to choose from, allowing users to select the instance __size and configuration__ that best fits their needs. 

### What is AMI?
Amazon Machine Image (AMI) is a __pre-configured virtual machine__ that serves as a __template__ for your EC2 instance. You'll be prompted to choose an AMI from a list of available options. You can choose from Amazon Linux, Ubuntu, Windows, and many other options.

By Neo: AMI is helpping me __quickly start__ my instance configuration.

### What is Instance Type?
An instance type determines the __computing resources__ (CPU, RAM, storage, etc.) available to your EC2 instance. 

### About Key Pair
Like a key, to login to my instance, generate by RSA or ED25519.
- What are they?
  - __RSA__:
  - __ED25519__:

- Compare:
    | **Feature**                          | **RSA**                                                                                                       | **Ed25519**                                                                                            |
    | ------------------------------------ | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
    | **Key Size**                         | Typically 2048 or 4096 bits                                                                                   | 256 bits (32 bytes)                                                                                    |
    | **Security Level**                   | RSA-2048 offers around 112 bits of security                                                                   | Approximately 128 bits of security                                                                     |
    | **Performance**                      | Slower due to large key sizes and computational complexity; higher CPU and memory usage                       | Faster signature generation and verification; more efficient and suitable for constrained environments |
    | **Algorithm Type**                   | Based on the integer factorization problem                                                                    | Based on elliptic curve cryptography over finite fields                                                |
    | **Vulnerability to Quantum Attacks** | Highly vulnerable; quantum algorithms can efficiently factor large numbers                                    | Also vulnerable but requires larger quantum computers to break compared to RSA                         |
    | **Implementation and Security**      | Requires careful implementation to avoid side-channel attacks; non-deterministic signatures can be vulnerable | Designed to be resistant to common implementation pitfalls; deterministic signatures enhance security  |
    | **Use Cases**                        | Widely used in SSL/TLS certificates, email encryption, and secure communications                              | Increasingly adopted in secure messaging apps, SSH authentication, and blockchain technologies         |


- File extension
  - `.pem`:
  - `.ppk`:

- Compare:
    | **Feature**            | **.pem**                                                                                                              | **.ppk**                                                                                |
    | ---------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
    | **File Extension**     | `.pem`                                                                                                                | `.ppk`                                                                                  |
    | **Purpose**            | Stores certificates, private keys, and other cryptographic data in a Base64-encoded format                            | Stores private keys specifically for PuTTY SSH authentication                           |
    | **Format**             | ASCII text file with Base64-encoded data enclosed between `-----BEGIN [TYPE]-----` and `-----END [TYPE]-----` headers | Proprietary format used by PuTTY; can be binary or text                                 |
    | **Usage**              | Used in SSL/TLS configurations, OpenSSL tools, and various cryptographic applications across different platforms      | Used exclusively by PuTTY, Pageant, and related tools on Windows for SSH authentication |
    | **Compatibility**      | Compatible with OpenSSL and OpenSSH; widely accepted across different systems and applications                        | Specific to PuTTY; not directly compatible with OpenSSH or other SSH clients            |
    | **Conversion**         | Generally not required; already in a widely accepted format                                                           | Requires conversion (using PuTTYgen) to OpenSSH format for use with other SSH clients   |
    | **Content**            | Can store certificates, private keys, certificate chains, or combined data                                            | Stores private keys, may include comments and passphrase protection                     |
    | **Encryption Support** | Can be encrypted with a passphrase for added security                                                                 | Supports passphrase protection for private keys                                         |
    | **Platform**           | Cross-platform; used on Windows, Linux, macOS, and other operating systems                                            | Primarily used on Windows systems with PuTTY                                            |
    | **Readability**        | Human-readable (ASCII text), can be viewed and edited with a text editor                                              | May not be human-readable; manual editing is not recommended                            |


> ref: [为什么不推荐使用RSA加密算法而推荐ED25519 加密算法生成SSH Key?](https://blog.csdn.net/hadues/article/details/130675430)

### About VPC

> ref: https://mile.cloud/zh/resources/blog/vpc-introduction-network-setting-subnet_533