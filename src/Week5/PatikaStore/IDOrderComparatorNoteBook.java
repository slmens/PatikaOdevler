package Week5.PatikaStore;

import java.util.Comparator;

public class IDOrderComparatorNoteBook implements Comparator<Notebook> {
    @Override
    public int compare(Notebook o1, Notebook o2) {
        return o1.getRealId().charAt(0) - o2.getRealId().charAt(0);
    }
}
