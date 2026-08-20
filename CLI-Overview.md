
> ## Documentation Index
>
> Fetch the complete documentation index at: https://docs.base44.com/llms.txt
> Use this file to discover all available pages before exploring further.

# CLI Overview

> Build and manage Base44 apps from the command line

The Base44 CLI is a command-line tool for building and managing Base44 apps from your terminal. Create new backend projects, sync data models and code, deploy resources, and run commands against any app on your account, including apps you built in the [Base44 online app editor](https://base44.com/ai-app-builder) and never linked locally.

<Note>
  The CLI and backend service are currently in beta. We're actively improving the platform and documentation based on user feedback. Share your thoughts and feature requests on our [GitHub Discussions page](https://github.com/orgs/base44/discussions).
</Note>

## Installation

```bash
npm install -g base44@latest
```

Or run [commands](/developers/references/cli/commands/introduction) directly with npx:

```bash
npx base44@latest <command>
```

Requires Node.js 20.19.0 or higher.

## Create projects

Create new Base44 backend projects with the [`create`](/developers/references/cli/commands/create) command. You can choose from available templates to get started quickly.

See our quickstart articles for a detailed walkthrough:

* [Backend-only quickstart](/developers/backend/quickstart/templates/quickstart-backend-only)
* [React quickstart](/developers/backend/quickstart/templates/quickstart-react-template)

## Start from a Base44 app

If you've built an app with the [Base44 app editor](https://base44.com/ai-app-builder), the CLI gives you two ways to work with it.

Commands that don't need a local project work against any app you have access to. Authenticate with [`login`](/developers/references/cli/commands/login), then run commands with [`--app-id <id>`](/developers/references/cli/commands/introduction#select-a-target-app) or set the `BASE44_APP_ID` environment variable. Useful for tailing logs, running scripts, managing secrets, and setting up connectors from anywhere on your machine.

For a full local copy of the app to develop offline or in a custom IDE, set up the [GitHub integration](/developers/app-code/local-development/github) to keep your app in sync between Base44 and your repo. Alternatively, the [`eject`](/developers/references/cli/commands/eject) command creates a one-time local copy with a new app id. For a step-by-step eject guide, see [Start from an Existing Base44 App](/developers/backend/overview/start-from-existing-app).

## Link existing backend projects

If you have existing Base44 backend project code, such as from an [example app](https://github.com/base44/apps-examples), use the [`link`](/developers/references/cli/commands/link) command to connect it to a Base44 backend. For a step-by-step guide, see [Link an Existing Backend Project](/developers/backend/overview/link-existing-project).

## Manage workspaces

If you belong to multiple workspaces, the CLI can target them directly. Create new apps in a specific workspace with [`create --workspace`](/developers/references/cli/commands/create) or [`link --create --workspace`](/developers/references/cli/commands/link), and move an app between workspaces with [`workspace move`](/developers/references/cli/commands/workspace-move). Use [`workspace list`](/developers/references/cli/commands/workspace-list) and [`workspace get`](/developers/references/cli/commands/workspace-get) to find workspace IDs.

## Manage resources

Define [entity schemas](/developers/backend/resources/entities/overview) as JSON files, write [serverless functions](/developers/backend/resources/backend-functions/overview) in TypeScript, configure [AI agents](/developers/backend/resources/agents/overview), and set up [OAuth connectors](/developers/backend/resources/connectors) for external services. The CLI validates your definitions, reports what changed, and keeps your local and remote resources in sync.

## Develop locally

Start a local development server with [`dev`](/developers/references/cli/commands/dev) to test your project on your machine without deploying. See the [Local development](/developers/backend/overview/local-dev/local-development-overview) guide for details.

## Bring your own agent

The `sandbox` commands work the other way around. Instead of running your project locally, they connect to the app's [sandbox](/developers/app-code/local-development/bring-your-own-agent), the cloud environment that holds the app's code, and runs its development server. There is no checkout and nothing to install, and writing a file is all it takes to ship the change.

Explore the app with [`sandbox ls`](/developers/references/cli/commands/sandbox-ls), [`sandbox read`](/developers/references/cli/commands/sandbox-read), and [`sandbox grep`](/developers/references/cli/commands/sandbox-grep). Change it with [`sandbox write`](/developers/references/cli/commands/sandbox-write) and [`sandbox edit`](/developers/references/cli/commands/sandbox-edit), run builds and tests with [`sandbox run`](/developers/references/cli/commands/sandbox-run), and mark a known-good state with [`sandbox checkpoint`](/developers/references/cli/commands/sandbox-checkpoint). This is how you point your own AI coding agent at a Base44 app. It requires a [Builder plan](/Account-and-billing/Billing-and-plans) or higher.

## Deploy your project

Deploy all your project resources to Base44 with the [`deploy`](/developers/references/cli/commands/deploy) command. This pushes entities, functions, connectors, auth config, and site files in a single operation. You can also deploy resources individually using [`entities push`](/developers/references/cli/commands/entities-push), [`functions deploy`](/developers/references/cli/commands/functions-deploy), [`connectors push`](/developers/references/cli/commands/connectors-push), [`auth push`](/developers/references/cli/commands/auth-push), and [`site deploy`](/developers/references/cli/commands/site-deploy). After deploying, use [`site open`](/developers/references/cli/commands/site-open) to open your live site in the browser.

## Configure authentication

Manage your app's login methods from the command line. Pull the current config with [`auth pull`](/developers/references/cli/commands/auth-pull), toggle email/password with [`auth password-login`](/developers/references/cli/commands/auth-password-login), toggle social providers (Google, Microsoft, Facebook, Apple) with [`auth social-login`](/developers/references/cli/commands/auth-social-login), and push your changes with [`auth push`](/developers/references/cli/commands/auth-push). Auth config is also included when you run [`deploy`](/developers/references/cli/commands/deploy).

## Run scripts

Run standalone TypeScript or JavaScript scripts that interact with your app using [`exec`](/developers/references/cli/commands/exec). A pre-authenticated SDK client is available as a global `base44` variable, so you can access entities, functions, and integrations without any setup code. Pass `--app-id` to target a specific app, or run it inside a linked project to use the project's app. Useful for data migrations, seed scripts, ad-hoc queries, and automation. See the [Standalone scripts](/developers/backend/overview/run-scripts) guide for a full walkthrough.

## See also

* [CLI Command Reference](/developers/references/cli/commands/introduction): All available CLI commands
* [Bring your own agent](/developers/app-code/local-development/bring-your-own-agent): Develop an app remotely in the cloud environment that holds its code
* [About the Base44 backend service](/developers/backend/overview/introduction): Learn about Base44 backend features
* [Project Structure](/developers/backend/overview/project-structure): How project files are organized
* [JavaScript SDK](/developers/references/sdk/getting-started/overview): Connect your app to the backend
