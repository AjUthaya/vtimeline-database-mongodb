FROM mysql
# ^ DEFINE: Base image

# SET: Working directory
WORKDIR /var/lib/mysql

# COPY: Project files into container
COPY . /opt/app/vtimeline/database/.

# VOLUME
VOLUME /var/lib/mysql

