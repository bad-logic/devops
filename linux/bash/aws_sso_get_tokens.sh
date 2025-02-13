#!/bin/bash

# script to get access token, secret key, session token from aws sso login 
# and export to current shell or attach the existing tokens to current shell


# prerequisite run `aws sso configure` to configure sso start url and a profile

# make sure that .aws/config has a profile named profile1
# sample
#[profile profile1]
#sso_session=
#sso_account_id=
#sso_role_name=
#region=


ACCOUNT_ID=
ROLE_NAME=
PROFILE="profile1"


attach_session(){
  source "$HOME"/.aws/cs_config
}


create_session(){
  aws sso login --profile $PROFILE

  ACCESS_TOKEN=$(jq -r '.accessToken' ~/.aws/sso/cache/$(ls ~/.aws/sso/cache | head -n 1))

  TOKENS=$(aws sso get-role-credentials --account-id $ACCOUNT_ID --role-name $ROLE_NAME --profile $PROFILE --access-token $ACCESS_TOKEN --query 'roleCredentials.[accessKeyId,secretAccessKey,sessionToken]' --output text)

  # Check if the operation was successful
  if [ $? -ne 0 ]; then
      echo "Operation Failed!!!"
      exit 1
  fi

  # Parse the credentials
  AWS_ACCESS_KEY_ID=$(echo $TOKENS | awk '{print $1}')
  AWS_SECRET_ACCESS_KEY=$(echo $TOKENS | awk '{print $2}')
  AWS_SESSION_TOKEN=$(echo $TOKENS | awk '{print $3}')


  # for below command to run successfully the profile used must have set region value
  AWS_REGION=$(aws configure get region --profile $PROFILE)

  printf "export AWS_ACCESS_KEY_ID=%s\nexport AWS_SECRET_ACCESS_KEY=%s\nexport AWS_SESSION_TOKEN=%s\nexport AWS_REGION=%s\n" "$AWS_ACCESS_KEY_ID" "$AWS_SECRET_ACCESS_KEY" "$AWS_SESSION_TOKEN" "$AWS_REGION" > "$HOME"/.aws/cs_config
  attach_session
}

OPTION=$1
if [ -z "$OPTION" ]; then
  OPTION="new"
fi

if [ "$OPTION" = "new" ]; then
  echo "creating aws session..."
  create_session
elif [ "$OPTION" = "attach" ]; then
  echo "attaching existing aws session..."
  attach_session
else
  echo "invalid option $OPTION"
fi