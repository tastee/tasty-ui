import { Component, OnDestroy } from '@angular/core';
import { ElectronService } from './providers/electron.service';
import { WorkspaceService } from 'app/services/workspace.service';
import { Workspace } from 'app/models/workspace';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {

  private subscription: Subscription;
  public workspace: Workspace;

  constructor(public electronService: ElectronService, public workspaceService: WorkspaceService) {

    if (electronService.isElectron()) {
      console.log('Mode electron');
      // Check if electron is correctly injected (see externals in webpack.config.js)
      console.log('c', electronService.ipcRenderer);
      // Check if nodeJs childProcess is correctly injected (see externals in webpack.config.js)
      console.log('c', electronService.childProcess);
    } else {
      console.log('Mode web');
    }
    this.workspace = this.workspaceService.getWorkspace();
    this.subscription = this.workspaceService.workspaceChange().subscribe(workspace => this.workspace = workspace);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}