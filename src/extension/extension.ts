// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import { Serializer } from "./serializer";
import { Controller } from "./controller";

// This method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.workspace.registerNotebookSerializer("stylebook", new Serializer()),
    new Controller()
  );
  context.subscriptions.push(
    vscode.commands.registerCommand("stylebook.new", async () => {
      const newStylebook = await vscode.workspace.openNotebookDocument(
        "stylebook",
        new vscode.NotebookData([
          new vscode.NotebookCellData(
            vscode.NotebookCellKind.Markup,
            "# Welcome to your stylebook",
            "markdown"
          ),
          new vscode.NotebookCellData(
            vscode.NotebookCellKind.Code,
            "<h1>stylebook</h1>",
            "html"
          ),
          new vscode.NotebookCellData(
            vscode.NotebookCellKind.Code,
            "h1 {\n  color: #ffffff;\n}",
            "css"
          ),
        ])
      );
      await vscode.window.showNotebookDocument(newStylebook);
    })
  );
}

// This method is called when your extension is deactivated
export function deactivate() {}
