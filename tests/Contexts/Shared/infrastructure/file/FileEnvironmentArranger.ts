import glob from 'glob';
import { EnvironmentArranger } from '../arranger/EnvironmentArranger';
import fs from 'fs';

export class FileEnvironmentArranger extends EnvironmentArranger {
  public async arrange(): Promise<void> {
    await this.deleteFiles();
  }

  private async deleteFiles(): Promise<void> {
    const pathFiles = this.getPathFiles();

    for (const pathFile of pathFiles) {
      try {
        await fs.promises.rm(pathFile)
      } catch (error) {
        console.error(`File with path ${pathFile} not found`)
      }
    }
  }

  private getPathFiles(): string[] {
    return glob.sync(process.cwd() + '/**/*.repo');
  }

  public async close(): Promise<void> {
    return
  }
}
