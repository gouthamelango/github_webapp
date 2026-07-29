import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { provideEchartsCore } from 'ngx-echarts';
import * as echarts from 'echarts/core';
import { HeatmapChart, RadarChart } from 'echarts/charts';
import {
  CalendarComponent,
  RadarComponent,
  TooltipComponent,
  VisualMapComponent
} from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([
  CalendarComponent,
  RadarComponent,
  HeatmapChart,
  RadarChart,
  TooltipComponent,
  VisualMapComponent,
  CanvasRenderer
]);

import { Github } from './core/services/github';
import { Graph } from './core/services/graph';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(),
    provideEchartsCore({echarts}),
    Github,
    Graph
  ]
};
