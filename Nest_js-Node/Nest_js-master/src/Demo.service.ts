import { Injectable } from '@nestjs/common';

@Injectable()
export class DemoService {
    addDemo():string{
        return "this will add demo";
    }

    updateDemo():string{
        return "this data update";
    }

    deleteDemo():string{
        return "this remove one";
    }

    getAllDemo():string{
        return "this find all";
    }

    getOneDemo(): string {
        return "this One Demo demo";
    }
}