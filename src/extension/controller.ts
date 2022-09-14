import * as vscode from "vscode";

export class Controller {
  readonly controllerId = "html-css-notebook-controller";
  readonly notebookType = "html-css-notebook";
  readonly label = "HTML & CSS Notebook";
  readonly supportedLanguages = ["html", "css"];

  private readonly _controller: vscode.NotebookController;

  constructor() {
    this._controller = vscode.notebooks.createNotebookController(
      this.controllerId,
      this.notebookType,
      this.label
    );

    this._controller.supportedLanguages = this.supportedLanguages;
    this._controller.supportsExecutionOrder = false;
    this._controller.executeHandler = this._execute.bind(this);
  }

  private _execute(
    cells: vscode.NotebookCell[],
    _notebook: vscode.NotebookDocument,
    _controller: vscode.NotebookController
  ): void {
    const allCells = _notebook.getCells();
    let html = "";
    let css = "";
    for (let cell of allCells) {
      if (cell.kind === 2) {
        if (cell.document.languageId === "html") {
          html += cell.document.getText() + "\n";
        } else if (cell.document.languageId === "css") {
          css += cell.document.getText() + "\n";
        }
      }
      if (
        cells.find((element) => {
          return element === cell;
        })
      ) {
        this._doExecution(cell, html, css);
      }
    }
  }

  private _doExecution(cell: vscode.NotebookCell, html: string, css: string) {
    const execution = this._controller.createNotebookCellExecution(cell);
    execution.start(Date.now());

    let code = `
      <style>${css}</style>
      ${html}
    `;

    execution.replaceOutput([
      new vscode.NotebookCellOutput([
        vscode.NotebookCellOutputItem.text(code, "text/html"),
      ]),
    ]);

    execution.end(true, Date.now());
  }

  dispose() {}
}
