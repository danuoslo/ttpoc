import {LocalizedValue} from '../model/LocalizedValue';
import FrameWorkMockData from './frameworkmockdata';
import {FrameworkDetail} from '../model/FrameworkDetail';
import FrameworkDetailData from '../api/frameworkDetailMockData';
import {FrameworkMarkupDetails} from '../model/FrameworkMarkupDetails';
import FrameWorkMockupData from '../Api/frameworkmockupdata';

class FrameworkAPI {

  private _clone (item) {
  	return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value instead of by reference
  };

  // Just return a copy of the mock data
  getAllFramework() : Array<LocalizedValue> {
		return this._clone(FrameWorkMockData);
	}

  getFramework() : FrameworkDetail {
    return this._clone(null);
  }

  getAllMarkFramework() :Array<FrameworkMarkupDetails>
  {
    return this._clone(FrameWorkMockupData);

  }
}

export const frameworkAPI = new FrameworkAPI();