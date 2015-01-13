.PHONY: deploy clean

print = @echo "=> $(1)"\
				"\n-----------------------"

deploy:
	$(call print, "Compile site")
	harp compile

	$(call print, "Checkout gh-pages branch")
	git checkout gh-pages

	$(call print, "Clean unwanted files and folders")
	rm -rf www/.git www/.gitignore
	cp -r www/ ./
	make clean

	$(call print, "Commit changes to GitHub pages")
	git add .
	git commit -m ":rocket: deploy website"
	git push origin gh-pages

	$(call print, "Go back to master")
	git checkout master

clean:
	rm -rf www
