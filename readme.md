An example on how to create a simple markdown file generator, specificially for new blog pages as outlined here: [https://rjferguson.github.io/posts/generating-markdown-post-templates](https://rjferguson.github.io/posts/generating-markdown-post-templates)

To generate a new-post, run the following command:

```bash
$ npm run new-post -- --name PostTitleName
```

This command will generate templates with the appropriate base file names in the `output/posts` directory. For the template configurations, check out the `src/new-post.md` file.
