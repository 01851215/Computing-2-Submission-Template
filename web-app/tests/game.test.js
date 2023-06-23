import {createGrids, getGrids, isWin, setGridVal} from "../game.js";
import R from "../ramda.js";

describe('game', function() {
    it('create grids correctly', function () {
        createGrids();
        const grid = getGrids();
        if(!R.equals(grid, [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ])) {
            throw new Error(
              "The board is invalid grid: " + grid
            );
        }
    });

    it('set grid value correctly', function () {
        createGrids();
        setGridVal(4, 6, 2);
        setGridVal(1, 1, 1);
        setGridVal(3, 9, 2);
        const grid = getGrids();
        if(!R.equals(grid, [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
            [0, 0, 0, 0, 0, 0, 2, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ])) {
            throw new Error(
              "The board is invalid grid: " + grid
            );
        }
    });

    it('is win horizontal correctly', function () {
        createGrids();
        setGridVal(0, 0, 1);
        setGridVal(0, 1, 1);
        setGridVal(0, 2, 1);
        setGridVal(0, 3, 1);
        setGridVal(0, 4, 1);

        if(!isWin(0, 4)) {
            throw new Error(
              "The win flag is invalid"
            );
        }
    });

    it('is win vertical correctly', function () {
        createGrids();
        setGridVal(0, 0, 1);
        setGridVal(1, 0, 1);
        setGridVal(2, 0, 1);
        setGridVal(3, 0, 1);
        setGridVal(4, 0, 1);

        if(!isWin(4, 0)) {
            throw new Error(
              "The win flag is invalid"
            );
        }
    });

    it('is win slash correctly', function () {
        createGrids();
        setGridVal(0, 0, 2);
        setGridVal(1, 1, 2);
        setGridVal(2, 2, 2);
        setGridVal(3, 3, 2);
        setGridVal(4, 4, 2);

        if(!isWin(4, 4)) {
            throw new Error(
              "The win flag is invalid"
            );
        }
    });

    it('is win back-slash correctly', function () {
        createGrids();
        setGridVal(0, 4, 2);
        setGridVal(1, 3, 2);
        setGridVal(2, 2, 2);
        setGridVal(3, 1, 2);
        setGridVal(4, 0, 2);

        if(!isWin(4, 0)) {
            throw new Error(
              "The win flag is invalid"
            );
        }
    });
});
