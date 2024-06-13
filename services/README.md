location:
etc/systemd/system

systemctl start <service>
systemctl stop <service>
systemctl status <service>

systemctl enable <service> // start on reboot
systemctl disable <Service>

# make sure the changes are applied after editing/adding services by reloading

systemctl daemon-reload
