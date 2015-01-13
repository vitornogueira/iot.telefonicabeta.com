.PHONY: deploy clean

deploy:
	@echo "Compile site"
	@echo "------------------------"
	harp compile
	git checkout gh-pages
	rm -rf www/.git www/.gitignore
	cp -r www/ ./
	make clean
	git add .
	git commit -m ":rocket: deploy website"
	git push origin gh-pages
	git checkout master

clean:
	rm -rf www
