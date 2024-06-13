## Install gitlab runner

```
https://docs.gitlab.com/runner/install/osx.html
```

## Register

```
gitlab-runner register
```

## verify manually if status is not connected in gitlab ci profile

```
gitlab-runner verify
```

## run the gitlab runner

```
gitlab-runner run
```

## see status

```
gitlab-runner status
```

## gitlab ci

#### Variables

```


Predefined variables : variable available in every GitLab CI/CD pipeline.
custom variables : can be defined from settings -> ci/cd -> variables.

variables can also be defined on the jobs or globally (inside .gitlab-ci file)

```

#### Needs

Used for Job dependencies

```
needs: ["prev_stage"]
```

#### Environment

set up environment for the deployment

```
environment:
        name: production
        url: https://abc.com

```

### Only

#### Run on specific branch only

```
only:
   refs:
     - master # run only in master branch
     - merge_request # run only in merge_request
```

#### Run on some file changes only

```
only:
   changes:
      - index.html # runs only if there is a change in index.html
```

### Except

```
except:
   - master # doesnot run on master branch
```

### Artifacts -> use when need to pass the current jobs artifacts to the next job
