# README

- use `$ curl localhost`
  ![alt text](assets/IMG/image.png)

- check status
  `$ sudo systemctl status nginx`
  ![alt text](assets/IMG/image-1.png)

- check server sections, find out `;;` in event section and take off one `;`
  `$ sudo vim /etc/nginx/nginx.conf`
  ![alt text](assets/IMG/image-2.png)
  ![alt text](assets/IMG/image-3.png)
  
- start nginx and check
  ![alt text](assets/IMG/image-5.png)

- check status
  `$ sudo systemctl status nginx`
  ![alt text](assets/IMG/image-4.png)
  - knowing port 80 is already in use

- so, check `0.0.0.0:80`
  ![alt text](assets/IMG/image-6.png)
  - `srv` occupy port 80 but i don't need it

- so, stop and disable (to prevent `srv` automatically relaunch) it 
  ![alt text](assets/IMG/image-7.png)

- restart `nginx`
  ![alt text](assets/IMG/image-8.png)

- use `curl` to check
  ![alt text](assets/IMG/image-9.png)
  - still error, maybe have error on firewall

- so, `sudo iptables -L`
  ![alt text](assets/IMG/image-10.png)
  - got it, rejecting `tcp dpt:http`

- so, make it accept
  `sudo iptables -D INPUT -p tcp --dport 80 -j REJECT`
  `sudo iptables -A INPUT -p tcp --dport 80 -j ACCEPT`
  ![alt text](assets/IMG/image-11.png)
  ![alt text](assets/IMG/image-12.png)

- check curl
  ![alt text](assets/IMG/image-13.png)
  - successfully connect but forbidden, maybe is premission problem

- so, find out premission problem file and `chmod 755`
  ![alt text](assets/IMG/image-14.png)
  ![alt text](assets/IMG/image-15.png)

- check curl
  - in instance
  ![alt text](assets/IMG/image-16.png)
  - outside of instance
  ![alt text](assets/IMG/image-17.png)

- now reboot instance to check again
  - in instance
  ![alt text](assets/IMG/image-19.png)
  - outside of instance
  ![alt text](assets/IMG/image-18.png)
  - refuse again

- so, check every again
  ![alt text](assets/IMG/image-20.png)
  - knowing that firewall reject again

- so, reset firewall again and save status
  ![alt text](assets/IMG/image-21.png)

- check curl again
  - in instance
  ![alt text](assets/IMG/image-16.png)
  - outside of instance
  ![alt text](assets/IMG/image-22.png)

- now reboot instance to check again
  - in instance
  ![alt text](assets/IMG/image-19.png)
  - outside of instance
  ![alt text](assets/IMG/image-18.png)
  - refuse again

- so, check every again
  ![alt text](assets/IMG/image-24.png)
  ![alt text](assets/IMG/image-23.png)
  - found nginx status inactive

- so, restart nginx and check if nginx is enable
  ![alt text](assets/IMG/image-25.png)
  - enable nginx and reboot instance
  ![alt text](assets/IMG/image-26.png)

- check from outside
  ![alt text](assets/IMG/image-27.png)
  - success to connect to instance, Congratulations!