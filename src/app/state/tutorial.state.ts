import { Tutorial }  from '../models/tutorial.model';
import { State,Action,StateContext,Selector } from '@ngxs/store'
import { AddTutorial,RemoveTutorial } from '../actions/tutorial.actions';


export class TutorialStateModel {
    tutorials:Tutorial [];
}

@State<TutorialStateModel>({
    name:'tutorials',
    defaults: {
        tutorials:[]
    }
})

export class TutorialState {

    @Selector()
    static getTutorials(state:TutorialStateModel) {
        return state.tutorials;
    }

    @Action(AddTutorial)
    addTutorail({getState  ,patchState }: StateContext<TutorialStateModel>, { payload }: AddTutorial) {
        const state = getState();
        patchState({
            tutorials: [...state.tutorials,payload]
        })
    }


    @Action(RemoveTutorial)
    removeTutorial({getState,patchState }: StateContext<TutorialStateModel>, { payload }: RemoveTutorial) {
        patchState({
            tutorials: getState().tutorials.filter(x => x.name != payload)
        })
    }
}