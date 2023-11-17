# supabase_godot_version_api
supabase rest api for godot version check

Method for Deploy

npm init
npm i supabase --save-dev
./node_modules/.bin/supabase projects list
./node_modules/.bin/supabase init
./node_modules/.bin/supabase link --project-ref <Project ID>
./node_modules/.bin/supabase functions deploy <function name> --no-verify-jwt
