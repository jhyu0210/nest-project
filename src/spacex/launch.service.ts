import {HttpService, Injectable} from '@nestjs/common'
import { LaunchModel,SpacexLaunch } from './dto/launch.model'
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';
@Injectable()
export class LaunchService {
  private apiUrl = "https://api.spacexdata.com/v3";

  constructor(private http: HttpService){}
  
  private toLaunch(launch: SpacexLaunch): LaunchModel{
    return {
      id: String(launch.flight_number || 0),
      // cursor: `${launch.launch_date_unix}`,
      site: launch.launch_site && launch.launch_site.site_name,
      mission: {
        name: launch.mission_name,
        missionPatchSmall: launch.links.mission_patch_small,
        missionPatchLarge: launch.links.mission_patch,
      },
      rocket: {
        id: launch.rocket.rocket_id,
        name: launch.rocket.rocket_name,
        type: launch.rocket.rocket_type,
      },
    };
  }

  getAllLaunches():Observable<LaunchModel> {
    const results= this.http.get(`${this.apiUrl}/launches`).pipe(
      map(({data})=>data.map(this.toLaunch))
    );
    console.log(results);
    return results;
  }
 
  getLaunchById(id:number): Observable<LaunchModel>{
    
    const result= this.http.get(`${this.apiUrl}/launches/${id}`).pipe(
      map(({data})=>this.toLaunch(data))
    );
    return result;
  }
}