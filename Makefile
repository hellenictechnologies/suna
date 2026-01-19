ARGS = $(filter-out $@,$(MAKECMDGOALS))
MAKEFLAGS += --silent

#Import Config
cnf ?= .env
include $(cnf)
#export $(shell sed 's/=.*//' $(cnf))

#https://jainsaket-1994.medium.com/docker-is-a-tool-that-enables-you-to-containerize-your-dev-environment-for-code-and-stop-worrying-1df81dbb0c23

# Initialize a new project
init:
	docker compose up -d --build

#Daily worlfow
start:
	docker compose up -d
up: start

stop:
	docker compose down
down: stop

# Restart your machine
restart:
	docker compose stop && docker compose up -d

#Rebuild 
# When you update variables inside the container Dockerfiles and need to update - Does NOT delete your data/db.
rebuild:
	docker compose stop && docker compose up -d --build

#Rebuild after destroying all volumes and folders
rebuildfull:
	docker compose stop; \
	docker compose pull; \
	docker rm --force $$(docker ps -q -f name=$(COMPOSE_PROJECT_NAME)); \
	docker volume rm --force $$(docker ps -f name=$(COMPOSE_PROJECT_NAME)); \
	docker rmi $$(docker images -q -f name=$(COMPOSE_PROJECT_NAME)); \
	docker compose build --no-cache --pull; \
	docker compose up -d --build; \

#Kill and Destroy
kill:
	docker kill $$(docker ps -q -f name=$(COMPOSE_PROJECT_NAME));

destroy:
	docker kill $$(docker ps -q -f name=$(COMPOSE_PROJECT_NAME)); \
	docker rm --force $$(docker ps -q -f name=$(COMPOSE_PROJECT_NAME)); \
	docker volume rm --force $$(docker ps -q -f name=$(COMPOSE_PROJECT_NAME)); \
	rm -rf ./app/*; \
	rm -rf ./dbdata; \
	rm -rf ./logs;

#DANGER DANGER deleted all volumes from docker. handle with care
#	docker kill $(docker ps -q);
#	docker rm --force $(docker ps -q); 
#	docker volume rm --force $(docker ps -q); 
#	rm -rf ./app/*; 
#	rm -rf ./dbdata;
#	rm -rf ./logs;
	
#Status, Help and Logging
status:
	docker compose ps

help:
	sh -c "echo; $(MAKE) -p no_targets__ | awk -F':' '/^[a-zA-Z0-9][^\$$#\/\\t=]*:([^=]|$$)/ {split(\$$1,A,/ /);for(i in A)print A[i]}' | grep -v '__\$$' | grep -v 'Makefile'| sort"

list: ## Output the current version
	docker ps -f name=$(COMPOSE_PROJECT_NAME)

version: ## Output the current version
	@echo $(COMPOSE_PROJECT_NAME)

images:
	docker images

ssh: shell

#Trust SSL certificate on local workstation
trust: 
	sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain ./config/ssl/localhost.cer

shell:
	docker compose exec --user www-data app /bin/bash

user:
	docker compose exec --user www-data app wp user create wp wp@example.com --role=administrator --user_pass=wp

root:
	docker compose exec --user root app /bin/bash


# Docker publish - TBD
## publish the `{version}` ans `latest` tagged containers to ECR
# publish: repo-login publish-latest publish-version 

#  ## publish the `latest` taged container to ECR
# publish-latest: tag-latest
# 	@echo 'publish latest to $(DOCKER_REPO)'
# 	docker push $(DOCKER_REPO)/$(APP_NAME):latest
#  ## publish the `{version}` taged container to ECR
# publish-version: tag-version
# 	@echo 'publish $(VERSION) to $(DOCKER_REPO)'
# 	docker push $(DOCKER_REPO)/$(APP_NAME):$(VERSION)
	
#############################
# Argument fix workaround
#############################
%:
	@:
