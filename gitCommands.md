## 1. Fork in git

A fork is like making a copy of someone else's project. It copies all the code and settings from the original project. For instance, if you find a mistake in someone's project, instead of just telling them about it, you can:

- Make a copy of their project (fork it).
- Fix the mistake in your copy.
- Ask the owner of the original project to consider your fix by sending them a request to include your changes (called a 'pull request').

## Git Rebase

- **What is it?**
  - The `git rebase` command allows you to easily change a series of commits, modifying the history of your repository.

- **Why use it?**
  - `rebase` is used for integrating changes from one branch to another.

- **What is rebasing?**
  - Rebasing is changing the base of your branch from one commit to another, making it appear as if you'd created your branch from a different commit.

- **How to do an interactive rebase?**
  - Use the command:
    ```bash
    git rebase --interactive <base>
    ```
  - This rebases the current branch onto `<base>` but uses an interactive rebasing session. 
  - This opens an editor where you can enter commands for each commit to be rebased.
## 3. How to remove the commit :

- We can remove the commit by using two methods as follows.

```
git reset HEAD^
```

- This command is used to reset the current branch's HEAD to its previous commit (HEAD^ refers to the commit before the current one).

- It does not modify the working directory or the index (staging area). The changes in your files remain in the working directory,

```
git reset --hard HEAD^
```

- The --hard option is a significant difference. It not only moves the HEAD to the previous commit but also resets the staging area (index) and the working directory to match the state of the specified commit (HEAD^ in this case).

- This means that all changes in your working directory and staging area since the specified commit are discarded.

