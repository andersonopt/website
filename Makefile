
IMAGE=andersonopt/landing-page-builder

all: 
	echo "Test"


build_image:
	docker build -t ${IMAGE} .
deploy_image:
	docker push ${IMAGE}