Search.setIndex({envversion:46,filenames:["class-structure","com/ampl/AMPL","com/ampl/AMPLException","com/ampl/AMPLOutput","com/ampl/AMPLOutput-Kind","com/ampl/Constraint","com/ampl/ConstraintInstance","com/ampl/DataFrame","com/ampl/Entity","com/ampl/EntityList","com/ampl/Environment","com/ampl/ErrorHandler","com/ampl/Instance","com/ampl/LicenseException","com/ampl/Objective","com/ampl/ObjectiveInstance","com/ampl/OutputHandler","com/ampl/Parameter","com/ampl/Set","com/ampl/SetInstance","com/ampl/Tuple","com/ampl/Variable","com/ampl/Variable-Integrality","com/ampl/VariableInstance","com/ampl/package-index","examples","getting-started","index","intro","packages","quick-start","reference"],objects:{"com.ampl":{AMPL:[1,3,1,""],AMPLException:[2,3,1,""],AMPLOutput:[3,3,1,""],Constraint:[5,3,1,""],ConstraintInstance:[6,3,1,""],DataFrame:[7,3,1,""],Entity:[8,3,1,""],EntityList:[9,3,1,""],Environment:[10,3,1,""],ErrorHandler:[11,3,1,""],Instance:[12,3,1,""],LicenseException:[13,3,1,""],Objective:[14,3,1,""],ObjectiveInstance:[15,3,1,""],OutputHandler:[16,3,1,""],Parameter:[17,3,1,""],Set:[18,3,1,""],SetInstance:[19,3,1,""],Tuple:[20,3,1,""],Variable:[21,3,1,""],VariableInstance:[23,3,1,""]},"com.ampl.AMPL":{"AMPL()":[1,2,1,""],"AMPL(Environment)":[1,2,1,""],"cd()":[1,0,1,""],"cd(String)":[1,0,1,""],"close()":[1,0,1,""],"display(Object)":[1,0,1,""],"display(Writer, Object)":[1,0,1,""],"eval(String)":[1,0,1,""],"evalAsync(String, Runnable)":[1,0,1,""],"expand(Entity)":[1,0,1,""],"expand(Writer, Entity)":[1,0,1,""],"getBoolOption(String)":[1,0,1,""],"getConstraint(String)":[1,0,1,""],"getConstraints()":[1,0,1,""],"getData(String)":[1,0,1,""],"getDblOption(String)":[1,0,1,""],"getEntity(String)":[1,0,1,""],"getErrorHandler()":[1,0,1,""],"getIntOption(String)":[1,0,1,""],"getObjective(String)":[1,0,1,""],"getObjectives()":[1,0,1,""],"getOption(String)":[1,0,1,""],"getOutputHandler()":[1,0,1,""],"getParameter(String)":[1,0,1,""],"getParameters()":[1,0,1,""],"getSet(String)":[1,0,1,""],"getSets()":[1,0,1,""],"getValue(String)":[1,0,1,""],"getVariable(String)":[1,0,1,""],"getVariables()":[1,0,1,""],"interrupt()":[1,0,1,""],"isBusy()":[1,0,1,""],"isRunning()":[1,0,1,""],"read(String)":[1,0,1,""],"readAsync(String, Runnable)":[1,0,1,""],"readData(String)":[1,0,1,""],"readDataAsync(String, Runnable)":[1,0,1,""],"readTable(String)":[1,0,1,""],"reset()":[1,0,1,""],"setBoolOption(String, boolean)":[1,0,1,""],"setData(DataFrame)":[1,0,1,""],"setData(DataFrame, String)":[1,0,1,""],"setDblOption(String, double)":[1,0,1,""],"setErrorHandler(ErrorHandler)":[1,0,1,""],"setIntOption(String, int)":[1,0,1,""],"setOption(String, String)":[1,0,1,""],"setOutputHandler(OutputHandler)":[1,0,1,""],"show(Entity)":[1,0,1,""],"show(Writer, Entity)":[1,0,1,""],"solve()":[1,0,1,""],"solveAsync(Runnable)":[1,0,1,""],"toString()":[1,0,1,""],"writeTable(String)":[1,0,1,""]},"com.ampl.AMPLException":{"AMPLException(Exception)":[2,2,1,""],"getLineNumber()":[2,0,1,""],"getMessage()":[2,0,1,""],"getOffset()":[2,0,1,""],"getSourceName()":[2,0,1,""],"toString()":[2,0,1,""]},"com.ampl.AMPLOutput":{"getKind()":[3,0,1,""],"getMessage()":[3,0,1,""],"toString()":[3,0,1,""],Kind:[4,3,1,""]},"com.ampl.AMPLOutput.Kind":{BREAK:[4,1,1,""],CD:[4,1,1,""],DISPLAY:[4,1,1,""],EXIT:[4,1,1,""],EXPAND:[4,1,1,""],LOAD:[4,1,1,""],MISC:[4,1,1,""],OPTION:[4,1,1,""],PRINT:[4,1,1,""],PROMPT:[4,1,1,""],SHELL_MESSAGE:[4,1,1,""],SHELL_OUTPUT:[4,1,1,""],SHOW:[4,1,1,""],SOLVE:[4,1,1,""],WAITING:[4,1,1,""],WRITE_TABLE:[4,1,1,""],XREF:[4,1,1,""]},"com.ampl.Constraint":{"astatus()":[5,0,1,""],"body()":[5,0,1,""],"defvar()":[5,0,1,""],"dinit()":[5,0,1,""],"dinit0()":[5,0,1,""],"drop()":[5,0,1,""],"dual()":[5,0,1,""],"get()":[5,0,1,""],"get(Object)":[5,0,1,""],"get(Tuple)":[5,0,1,""],"isLogical()":[5,0,1,""],"lb()":[5,0,1,""],"lbs()":[5,0,1,""],"ldual()":[5,0,1,""],"lslack()":[5,0,1,""],"restore()":[5,0,1,""],"setDual(double)":[5,0,1,""],"slack()":[5,0,1,""],"sstatus()":[5,0,1,""],"status()":[5,0,1,""],"toString()":[5,0,1,""],"ub()":[5,0,1,""],"ubs()":[5,0,1,""],"udual()":[5,0,1,""],"uslack()":[5,0,1,""],"val()":[5,0,1,""]},"com.ampl.ConstraintInstance":{"astatus()":[6,0,1,""],"body()":[6,0,1,""],"defvar()":[6,0,1,""],"dinit()":[6,0,1,""],"dinit0()":[6,0,1,""],"drop()":[6,0,1,""],"dual()":[6,0,1,""],"lb()":[6,0,1,""],"lbs()":[6,0,1,""],"ldual()":[6,0,1,""],"lslack()":[6,0,1,""],"restore()":[6,0,1,""],"setDual(double)":[6,0,1,""],"slack()":[6,0,1,""],"sstatus()":[6,0,1,""],"status()":[6,0,1,""],"toString()":[6,0,1,""],"ub()":[6,0,1,""],"ubs()":[6,0,1,""],"udual()":[6,0,1,""],"uslack()":[6,0,1,""],"val()":[6,0,1,""]},"com.ampl.DataFrame":{"DataFrame(Entity)":[7,2,1,""],"DataFrame(int, String)":[7,2,1,""],"addColumn(Object)":[7,0,1,""],"addColumn(Object, Collection)":[7,0,1,""],"addColumn(Object, T[])":[7,0,1,""],"addColumn(Object, double[])":[7,0,1,""],"addColumn(Object, float[])":[7,0,1,""],"addColumn(Object, int[])":[7,0,1,""],"addColumn(Object, long[])":[7,0,1,""],"addRow(Object)":[7,0,1,""],"getColumn(Object)":[7,0,1,""],"getColumnAsDoubles(Object)":[7,0,1,""],"getColumnAsStrings(Object)":[7,0,1,""],"getHeaders()":[7,0,1,""],"getNumCols()":[7,0,1,""],"getNumIndices()":[7,0,1,""],"getNumRows()":[7,0,1,""],"getRow(Object)":[7,0,1,""],"getRowByIndex(int)":[7,0,1,""],"iterator()":[7,0,1,""],"setColumn(Object, Collection)":[7,0,1,""],"setColumn(Object, T[])":[7,0,1,""],"setColumn(Object, double[])":[7,0,1,""],"setColumn(Object, float[])":[7,0,1,""],"setColumn(Object, int[])":[7,0,1,""],"setColumn(Object, long[])":[7,0,1,""],"setMatrix(Object, Object)":[7,0,1,""],"setValue(Object)":[7,0,1,""],"toString()":[7,0,1,""]},"com.ampl.Entity":{"entrySet()":[8,0,1,""],"get()":[8,0,1,""],"get(Object)":[8,0,1,""],"get(Tuple)":[8,0,1,""],"getIndexingSets()":[8,0,1,""],"getIndices()":[8,0,1,""],"getInstances()":[8,0,1,""],"getValues()":[8,0,1,""],"getValues(String)":[8,0,1,""],"hasIndexing()":[8,0,1,""],"indexarity()":[8,0,1,""],"isScalar()":[8,0,1,""],"name()":[8,0,1,""],"numInstances()":[8,0,1,""],"toString()":[8,0,1,""],"xref()":[8,0,1,""]},"com.ampl.EntityList":{"add(E)":[9,0,1,""],"add(int, E)":[9,0,1,""],"addAll(Collection)":[9,0,1,""],"addAll(int, Collection)":[9,0,1,""],"clear()":[9,0,1,""],"contains(Object)":[9,0,1,""],"containsAll(Collection)":[9,0,1,""],"get(String)":[9,0,1,""],"get(int)":[9,0,1,""],"indexOf(Object)":[9,0,1,""],"isEmpty()":[9,0,1,""],"iterator()":[9,0,1,""],"lastIndexOf(Object)":[9,0,1,""],"listIterator()":[9,0,1,""],"listIterator(int)":[9,0,1,""],"remove(Object)":[9,0,1,""],"remove(int)":[9,0,1,""],"removeAll(Collection)":[9,0,1,""],"retainAll(Collection)":[9,0,1,""],"set(int, E)":[9,0,1,""],"size()":[9,0,1,""],"subList(int, int)":[9,0,1,""],"toArray()":[9,0,1,""],"toArray(T[])":[9,0,1,""],"toString()":[9,0,1,""]},"com.ampl.Environment":{"Environment()":[10,2,1,""],"Environment(String)":[10,2,1,""],"addToPath(String)":[10,0,1,""],"getBinDir()":[10,0,1,""],"getMap()":[10,0,1,""],"setBinDir(String)":[10,0,1,""],"toString()":[10,0,1,""],PATH:[10,1,1,""]},"com.ampl.ErrorHandler":{"error(AMPLException)":[11,0,1,""],"warning(AMPLException)":[11,0,1,""]},"com.ampl.Instance":{"entity()":[12,0,1,""],"name()":[12,0,1,""],"toString()":[12,0,1,""]},"com.ampl.LicenseException":{"LicenseException(Exception)":[13,2,1,""],"LicenseException(String)":[13,2,1,""]},"com.ampl.Objective":{"astatus()":[14,0,1,""],"drop()":[14,0,1,""],"exitcode()":[14,0,1,""],"get()":[14,0,1,""],"get(Object)":[14,0,1,""],"get(Tuple)":[14,0,1,""],"message()":[14,0,1,""],"restore()":[14,0,1,""],"result()":[14,0,1,""],"sstatus()":[14,0,1,""],"toString()":[14,0,1,""],"value()":[14,0,1,""]},"com.ampl.ObjectiveInstance":{"astatus()":[15,0,1,""],"drop()":[15,0,1,""],"exitcode()":[15,0,1,""],"message()":[15,0,1,""],"restore()":[15,0,1,""],"result()":[15,0,1,""],"sstatus()":[15,0,1,""],"toString()":[15,0,1,""],"value()":[15,0,1,""]},"com.ampl.OutputHandler":{"output(AMPLOutput)":[16,0,1,""]},"com.ampl.Parameter":{"get()":[17,0,1,""],"get(Object)":[17,0,1,""],"get(Tuple)":[17,0,1,""],"hasDefault()":[17,0,1,""],"isSymbolic()":[17,0,1,""],"set(Object, String)":[17,0,1,""],"set(Object, double)":[17,0,1,""],"set(String)":[17,0,1,""],"set(double)":[17,0,1,""],"setValues(Object)":[17,0,1,""],"setValues(Object[], Object[])":[17,0,1,""],"setValues(Object[], double[])":[17,0,1,""],"setValues(double[][], boolean)":[17,0,1,""],"toString()":[17,0,1,""]},"com.ampl.Set":{"arity()":[18,0,1,""],"contains(Object)":[18,0,1,""],"containsAll(Collection)":[18,0,1,""],"get()":[18,0,1,""],"get(Object)":[18,0,1,""],"get(Tuple)":[18,0,1,""],"getValues()":[18,0,1,""],"getValues(String)":[18,0,1,""],"isEmpty()":[18,0,1,""],"iterator()":[18,0,1,""],"setValues(Object)":[18,0,1,""],"size()":[18,0,1,""],"toArray()":[18,0,1,""],"toArray(T[])":[18,0,1,""],"toString()":[18,0,1,""]},"com.ampl.SetInstance":{"add(Object)":[19,0,1,""],"addAll(Collection)":[19,0,1,""],"clear()":[19,0,1,""],"contains(Object)":[19,0,1,""],"containsAll(Collection)":[19,0,1,""],"isEmpty()":[19,0,1,""],"iterator()":[19,0,1,""],"remove(Object)":[19,0,1,""],"removeAll(Collection)":[19,0,1,""],"retainAll(Collection)":[19,0,1,""],"setValues(Object)":[19,0,1,""],"size()":[19,0,1,""],"toArray()":[19,0,1,""],"toArray(T[])":[19,0,1,""],"toString()":[19,0,1,""]},"com.ampl.Tuple":{"Tuple(Object)":[20,2,1,""],"clone()":[20,0,1,""],"elements()":[20,0,1,""],"equals(Object)":[20,0,1,""],"get(int)":[20,0,1,""],"hashCode()":[20,0,1,""],"insert(Object[], int)":[20,0,1,""],"join(Object)":[20,0,1,""],"size()":[20,0,1,""],"subtuple(int, int)":[20,0,1,""],"toString()":[20,0,1,""]},"com.ampl.Variable":{"astatus()":[21,0,1,""],"defeqn()":[21,0,1,""],"dual()":[21,0,1,""],"fix()":[21,0,1,""],"fix(double)":[21,0,1,""],"get()":[21,0,1,""],"get(Object)":[21,0,1,""],"get(Tuple)":[21,0,1,""],"init()":[21,0,1,""],"init0()":[21,0,1,""],"integrality()":[21,0,1,""],"lb()":[21,0,1,""],"lb0()":[21,0,1,""],"lb1()":[21,0,1,""],"lb2()":[21,0,1,""],"lrc()":[21,0,1,""],"lslack()":[21,0,1,""],"rc()":[21,0,1,""],"setValue(double)":[21,0,1,""],"slack()":[21,0,1,""],"sstatus()":[21,0,1,""],"status()":[21,0,1,""],"toString()":[21,0,1,""],"ub()":[21,0,1,""],"ub0()":[21,0,1,""],"ub1()":[21,0,1,""],"ub2()":[21,0,1,""],"unfix()":[21,0,1,""],"urc()":[21,0,1,""],"uslack()":[21,0,1,""],"value()":[21,0,1,""],Integrality:[22,3,1,""]},"com.ampl.Variable.Integrality":{BINARY:[22,1,1,""],CONTINUOUS:[22,1,1,""],INTEGER:[22,1,1,""]},"com.ampl.VariableInstance":{"astatus()":[23,0,1,""],"defeqn()":[23,0,1,""],"dual()":[23,0,1,""],"fix()":[23,0,1,""],"fix(double)":[23,0,1,""],"init()":[23,0,1,""],"init0()":[23,0,1,""],"lb()":[23,0,1,""],"lb0()":[23,0,1,""],"lb1()":[23,0,1,""],"lb2()":[23,0,1,""],"lrc()":[23,0,1,""],"lslack()":[23,0,1,""],"name()":[23,0,1,""],"rc()":[23,0,1,""],"setValue(double)":[23,0,1,""],"slack()":[23,0,1,""],"sstatus()":[23,0,1,""],"status()":[23,0,1,""],"toString()":[23,0,1,""],"ub()":[23,0,1,""],"ub0()":[23,0,1,""],"ub1()":[23,0,1,""],"ub2()":[23,0,1,""],"unfix()":[23,0,1,""],"urc()":[23,0,1,""],"uslack()":[23,0,1,""],"value()":[23,0,1,""]},com:{ampl:[24,4,1,""]}},objnames:{"0":["java","method","Java method"],"1":["java","field","Java field"],"2":["java","constructor","Java constructor"],"3":["java","type","Java type"],"4":["java","package","Java package"]},objtypes:{"0":"java:method","1":"java:field","2":"java:constructor","3":"java:type","4":"java:package"},terms:{"_con":[21,23],"_var":[5,6],"abstract":[8,12],"boolean":[1,5,8,9,17,18,19,20],"break":4,"case":[0,1,5,8,14,17,18,19,21,30],"catch":30,"default":[0,1,10,13,17,21,23,26,30],"final":[0,4,7,8,10,18,20,21,22,28,30],"float":7,"function":[0,1,4,5,6,9,16,17,18,19,20,25,26,28,30],"import":27,"int":[0,1,2,5,6,7,8,9,14,15,17,18,19,20,21,23],"long":7,"new":[0,1,5,6,7,10,13,14,15,17,18,19,20,21,23],"null":[1,2,5,7,8,9,14,17,18,19,20,21],"public":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],"return":[0,1,2,3,4,5,6,7,8,9,10,12,14,15,17,18,19,20,21,23,30],"static":[4,10,20,22],"throw":[0,1,5,6,7,8,9,14,15,17,18,19,20,21,23],"true":[1,5,8,9,17,18,19],"try":[0,5,8,14,17,18,21,30],"var":[0,8,20,21,23],"void":[1,5,6,7,9,10,11,14,15,16,17,18,19,20,21,23],"while":[0,1,7],abc:19,about:27,abov:[0,1,19,28,30],accessor:[6,15,19,23],account:0,acess:0,achiev:[20,30],act:28,activ:30,actual:0,adapt:0,add:[7,9,10,19,26,27],addal:[9,19],addcolumn:7,addrow:[0,7],addtopath:10,adjust:[5,6],after:[1,7,10,14,15],aka:17,algebra:[0,5,6,8,12,23,27],all:[0,1,5,6,7,8,9,11,14,15,17,18,19,20,21,23],alloc:[18,19],allow:[0,1,18,28],alphanumer:1,alreadi:[7,30],also:9,alter:0,altern:[0,19,26,30],altogeth:30,alwai:0,amount:[1,26],ampl1:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],amplapi:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],amplexcept:1,analyst:28,ani:[0,1,7,8,9,10,16,18,19,20,26,28,30],anoth:[0,17],anymor:[0,9,30],anyth:7,anywai:0,api:[0,1,7,11],apijarloc:10,append:10,applic:[11,26,28,30],appropri:[26,30],arbitrari:[1,27],architectur:28,argument:7,ariti:[7,18],arrai:[0,1,7,8,9,17,18,19,20],arrayindexoutofboundsexcept:20,artifici:[5,6],assign:[0,1,5,6,7,17,18,19],associ:[1,5,6],assum:30,astatu:[5,6,14,15,21,23],async:[0,1,25],asyncexampl:25,asynchron:1,attempt:1,attr:23,attribut:23,autom:7,automat:[0,1,7,9],avail:[0,1,2,5,6,14,15,21,23],avoid:[0,30],back:[1,28],base:[0,7,28],basi:[5,6,21,23],basic:[0,11,20,25],becom:13,beef:30,been:[0,1,5,6,7,8,14,15,17,18,19,21,23,26,28,30],befor:4,begin:2,behaviour:1,belong:23,below:[0,10,28,30],benefit:0,better:0,bin:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],binari:[10,21,22,23,26],bindir:10,bit:28,block:[0,1,30],bodi:[0,5,6,30],both:[5,6,30],bound:[5,6,21,23,30],bui:[8,30],built:8,bulk:0,busi:[0,1],calcul:0,call:[0,1,5,14,16,17,18,19,21,30],callback:[0,1,25],caller:[18,19],can:[0,1,5,7,8,9,14,17,18,19,20,21,25,26,27],cannot:[0,1,9],captur:[1,3],cardin:[7,19],cast:[0,1,7],caus:[13,16],central:0,chang:[0,1,10,28,30],check:[0,1,5,8,10,17,18,19,20],choic:26,choos:30,chosen:[28,30],circumnst:0,clariti:30,clear:[1,9,19],click:30,clone:20,close:[0,1,27],closeabl:1,clutter:30,code:[0,1,5,7,14,15,17,20,21,30],collect:[0,1,7,8,9,18,19,28,30],collector:1,column:[0,1,7,8],com:[5,6,14,15,21,23],come:[0,1,30],common:28,commun:[0,1,7,30],compact:0,compil:26,complet:[1,27],compon:18,composit:0,compris:0,comput:[0,26],concept:[0,28],concurr:0,concurrentmodificationexcept:1,condit:28,configur:30,conform:20,connect:28,consid:[7,18,19],consider:[0,8,30],consist:[0,1,9],consol:[1,30],constraint:[0,1],constraintinst:[0,5],constraintnam:5,construct:[1,2,10,13,20],consum:[0,1],contain:[0,1,2,4,7,8,9,10,18,19,20,23,28,30],containsal:[9,18,19],content:[18,19],context:0,continu:[0,21,22],control:0,conveni:0,convers:[0,1],convert:[7,18,19,20],copi:[10,20,30],correct:28,correspond:[0,1,5,7,8,9,14,17,18,21,30],cost:[21,23,30],could:[0,1],cours:0,cpu:28,creat:[0,1,7,20,27],creation:[0,7,27],current:[0,1,5,6,7,8,10,21,23,26,30],custom:10,customis:11,dat:30,datafram:[0,1,5],dataframeexampl:25,datatyp:7,date:0,deal:[0,23],decid:7,decis:[21,23,28,30],declar:[0,1,8,19,21,23],decoupl:[0,7,25],deep:20,def:19,defeqn:[21,23],defin:[0,1,5,6,17,21,23,30],definit:0,defvar:[5,6],delet:[0,5,6,8,9,14,15,17,18,19,21,23],demo:26,demonstr:0,depend:[0,1,8,10,28,30],deploi:26,deriv:[0,1,8,16],describ:[0,1],descript:5,desir:[0,18,19],detach:30,detail:0,detect:[0,1],determin:[18,19],develop:0,df2:30,diagnost:0,diagram:0,did:1,diet:[8,26,30],dietmodel:25,differ:[1,5,26],dimen:19,dimens:[7,8,17,18],dimension:[7,17,20],dinit0:[5,6],dinit:[5,6],directli:[0,17,28],directori:[1,10,25,26,30],displai:[1,4,16,23,25,26,30],displaystat:1,distribut:25,dll:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],document:[12,28],doe:[0,1,7,8,10,17,18,19,23,28,30],done:[1,7],doubl:[0,1,5,6,7,14,15,17,18,19,20,21,23,30],download:26,drop:[0,5,6,14,15],ds1:1,dsn:1,dual:[0,5,6,8,21,23],due:1,dylib:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],each:[0,1,7,8,17,18,19,23,30],eas:[0,23],easi:[18,28],easier:0,easili:[28,30],eclips:30,effect:[0,1,6,10,15],efficientfronti:25,either:[7,8,20,30],element:[0,1,8,9,18,19,20],els:7,embed:[0,13],empti:[1,7,8,9,18,19],encapsul:0,enclos:30,end:[18,19],engin:[0,1],enter:26,entit:[0,1],entitylist:[0,1],entri:8,entryset:8,enumer:0,env:1,environ:[0,1],equal:[7,8,17,20,23],equival:[1,5,6,8,12,14,15,17,18,19,20,21,23,30],errorhandl:[0,1],eval:[0,1,9,17,18,19],evalasync:[0,1],evalu:[0,1],even:0,eventu:1,everi:[0,1,5,6,19,30],exact:0,exactli:0,exampl:[0,1,7,8,17,19,20],except:[0,1,2,9,13,27,30],exclus:20,execut:[0,1,2,10,16,26,28,30],exepath:10,exist:[0,1,7,8,13,26,28],exit:[4,14,15],exitcod:[14,15],expand:[1,4,6,12,15],expect:10,experi:28,explain:0,explicit:0,explicitli:[0,1],explor:30,expos:18,express:[0,1,5,8,14,17,21,27],extend:[2,5,6,9,12,13,14,15,17,18,19,21,23],extent:0,extern:[28,30],extract:0,face:[0,1],facil:10,factori:1,fail:[0,1],fals:[1,5,6,17],familiar:30,father:12,featur:28,fetch:[1,3,25,30],few:25,figur:[0,30],file:[0,1,10,25,26,27],filenam:1,filesystem:26,find:[0,18],finish:1,first:[0,1,7],firstexampl:[25,26],firstindex:7,firstli:30,fit:[18,19],five:0,fix:[0,1,5,6,21,23],flatten:19,flavour:28,fold:0,folder:[26,30],follow:[0,1,7,8,10,17,18,19,23,26,30],food:[8,26,30],form:[1,3,8,20],format:[0,8,23,30],formul:19,found:[1,5,7,8,14,17,18,19,21,25,30],four:0,fourdimens:7,fourthindex:7,fragment:0,framework:28,free:27,freed:1,frequent:0,from:[0,1,2,3,4,7,8,14,16,17,18,20,21,23,25,26,27,28],fromindex:9,full:[1,26,30],further:[0,1,5,8,14,17,18,21,28,30],gain:[0,5,8,14,21,30],garbag:1,gener:[0,1,2,6,8,25,28,30],get:[0,1,3,4,5,6,7,8,9,10,12,14,15,17,18,19,20,21,23],getbindir:10,getboolopt:[0,1],getcolumn:7,getcolumnasdoubl:7,getcolumnasstr:7,getconstraint:[0,1,9,30],getdata:[1,30],getdblopt:1,getent:[0,1,30],geterrorhandl:[0,1],gethead:7,getindexingset:8,getindic:8,getinst:8,getintopt:1,getkei:8,getkind:3,getlinenumb:2,getmap:10,getmessag:[2,3,30],getnumcol:7,getnumindic:7,getnumrow:7,getobject:[0,1,9,30],getoffset:2,getopt:[0,1,30],getoutputhandl:[0,1],getparamet:[0,1,9,17,30],getrow:7,getrowbyindex:7,getset:[0,1,9,18,19,30],getsourcenam:2,getvalu:[0,1,5,7,8,14,18,21,30],getvari:[0,1,8,9,20,30],give:[7,30],given:30,good:30,great:28,greater:[7,8],group:[0,2],guarante:[0,9],guess:[5,6,21,23],guid:28,had:[6,15],ham:30,handler:[0,1,11],happen:1,hasdefault:17,hash:20,hashcod:20,hasindex:8,have:[0,1,7,14,21,26,30],header:7,heavi:0,hello:30,henc:0,here:[23,30],hint:25,hoc:1,how:[5,8,14,17,18,21,25,28,30],html:[5,6,14,15,21,23],http:[1,5,6,14,15,21,23],hungri:1,ident:0,identifi:[7,30],illegalargumentexcept:[1,5,7,8,14,17,18,20,21],illegalstateexcept:[5,6,8,14,15,17,18,19,21,23],illustr:[0,30],immedi:[18,19],immut:[1,9,20],implement:[0,1,7,9,11,16,18,19,26,28,30],includ:[1,7,10,26,30],inclus:20,incomplet:4,increas:30,index:[0,1,5,6,7,8,9,14,17,18,19,20,21,23,27,30],indexar:[5,8,14,17,18,21],indexof:9,indexoutofboundsexcept:7,indic:[0,1,7,8,17],influenc:9,inform:[5,8,14,16,17,18,19,20,21],init0:[21,23],init:[21,23],initi:[5,6,7,17,20,21,23],initialis:1,inner:[2,10],input:[0,1,30],insert:20,instancenam:[6,12,15],instanti:0,instead:[0,28],instruct:[18,26],integ:[1,2,21,22,23],integr:21,intend:28,interest:[0,30],interfac:[0,1,11,16,28,30],intermediari:28,intern:1,interpet:0,interpret:[0,1,4,5,6,8,10,11,14,15,16,17,18,19,21,23,28,30],interpter:0,interrupt:[1,4,25],introduct:27,invalid:[0,1,9],involv:1,ioexcept:[1,30],irrelev:28,isbusi:1,isempti:[9,18,19],islog:5,isrun:1,isscalar:8,issu:[0,1,30],issymbol:17,item:[0,7,9,17],iter:[0,7,9,18,19],jar:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],java:[0,1,9,10,18,19,20],javac:26,jdk:26,join:[0,20],jre:30,just:[8,10,28],keep:0,kei:[0,5,7,8,14,17,18,21],kept:0,kind:[0,3],know:[0,18,19,30],known:30,lang:18,languag:[0,28,30],last:[2,4,9,19,26],lastindexof:9,later:26,latest:26,latter:0,lazi:1,lazili:[0,1,9,30],lb0:[21,23],lb1:[21,23],lb2:[21,23],ldual:[5,6],lead:[0,28],least:20,length:[18,19],lesser:[5,6,21,23],let:[5,6,17,23],level:[0,8,23],lib:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],libampl:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],librari:[0,4,26,28],licenc:1,licens:[1,13,26],licenseexcept:1,like:[0,1,5,14,21],line:[0,2,4,30],link:9,linkedlist:19,linux:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],lion:28,list:[0,1,5,6,8,9,10,14,15,19,21,23,25,27],listiter:9,load:[4,10,27],locat:[1,10,26],logic:[5,6,28],look:1,lower:[5,6,21,23],lrc:[21,23],lslack:[5,6,21,23],macosx:26,made:30,mai:[1,20],main:[0,28],maintain:[0,1],make:[26,30],manag:1,mani:8,manipul:0,manual:[7,27],map:[0,1,8,10],mark:5,match:17,mathemat:0,matlab:28,matrix:17,maxim:0,mean:0,member:[8,18,19,23],memori:[1,28],messag:[1,2,3,4,13,14,15,16],method:0,might:[5,6],mind:28,minimum:30,misc:4,misus:1,mix:[0,1],mod:30,mode:1,modif:[0,30],modifi:[0,7,8,9,27],more:[0,1,16,18,19,20],moreov:0,most:[14,15,28],mostli:28,move:26,much:28,multi:0,multidimension:[7,17],multidimensionalexampl:25,multipl:[0,1,17,30],must:[0,1,11,17],mynewpath:10,name:[0,1,2,5,6,7,8,9,10,12,14,15,19,21,23,26,30],nativ:1,nearer:[21,23],necessari:[0,25,26,28,30],need:[0,11,26,28,30],negative_infin:23,newli:0,next:9,non:[5,7,14,17],none:2,nor:9,normal:[4,28],note:[0,1,5,6,9,10,14,16,17,20,21,23,30],noth:1,notif:11,now:30,nullpointerexcept:20,number:[0,1,2,5,7,8,9,14,17,18,19,20,21],numberformatexcept:1,numberofindexcolumn:7,numer:[7,20,27],numinst:[0,8],object:[0,1,5,7,8,9,12],objectiveinst:[0,14],objectivenam:14,obtain:[0,1,9,14,18,21,28,30],obviou:0,occur:2,offici:28,offset:2,often:[0,5,6,30],onc:[0,7,30],onli:[0,1,5,6,8,10,14,18,19,20,30],onward:0,open:[0,1,26,30],oper:[0,1,4,9,18],optim:[1,26,28,30],optimis:[0,1,30],optionsexampl:25,order:[0,8,17,30],org:1,origin:[5,6,7,21,23],osx:28,other:[0,1,9,20,28,30],otherwis:[1,5,6,14,15,17,18,19,21,23],our:26,out:[0,1,5,6,8,16,21,23,30],outcom:1,outputhandl:[0,1],outsid:0,over:[0,1,8,20],overhead:[0,28],overload:[0,30],overrid:10,overview:0,own:26,packag:[26,27,30],page:[26,27],par:17,paragraph:0,param:[0,17],paramat:17,paramet:[0,1,2,5,6,7,8,9,10,12,13,14,16],parameternam:17,parent:[0,19],pars:1,part:[0,12],particular:0,pass:[0,1,8,16,17,18,20],path:[1,10,26,30],pathseparatorchar:10,percentag:30,perform:[0,10,30],permit:[0,10],phase:[21,23],place:[7,26],platform:[10,26,28],pleas:[17,30],point:0,popul:[1,7],port:28,portfolio:25,posit:[1,10,20],positive_infin:23,possibl:[0,1,5,6,23,28,30],power:30,practic:30,pre:7,predict:0,prefer:[0,26,30],present:[0,5,14,18,19,21,28,30],presolv:[5,6,21,23],price:0,princip:8,print:[0,1,4,8,23,30],println:[0,30],problem:[1,13,25,26,27],procedur:[1,28,30],process:[0,1,10,28],produc:30,program:[0,27,28],programm:[0,30],programmat:[0,25,30],project:[26,27],prompt1:4,prompt2:4,prompt:4,proof:28,proper:0,properli:30,properti:[0,8,14,18,21,30],provid:[0,7,10,26,28,30],put:[7,10],qmip:25,quick:[27,28],quickli:26,quit:0,rang:20,read:[0,1,25,28,30],readasync:[0,1],readdata:[0,1,30],readdataasync:[0,1],reader:28,readtabl:1,reason:[0,1],reassign:[1,7,25,30],receiv:11,recent:[14,15],rectangular:17,redirect:1,reduc:[0,21,23],refer:[0,1,17,20,26,27,28],referenc:[0,30],reflect:[5,6],refresh:0,regard:[0,10,19],regist:11,relationship:0,relax:25,releas:[1,26,30],reli:[0,28],remov:[9,19],removeal:[9,19],repeteatli:25,replic:[0,23],report:[1,11],repres:[0,1,2,5,6,8,9,12,13,14,15,17,18,21,23,30],represent:[0,1,3,5,6,7,8,9,12,14,15,17,18,21,23,30],requir:[1,27],reset:[1,5,6],resolv:30,resourc:[0,1,27],respect:[28,30],restart:1,restor:[0,5,6,14,15],restrict:22,result:[0,1,14,15,30],retainal:[9,19],right:30,risk:0,room:[18,19],routin:0,row:[0,7],run:[1,9,26],runnabl:1,runtim:[18,19],runtimeexcept:[1,2,13],safe:[0,30],same:[0,1,5,6,7,14,15,17,20,21,23,25,30],scalarvalueexpress:1,schema:28,schemat:0,scope:1,screenshot:30,script:1,search:[10,18,26,27],second:30,secondindex:7,section:[0,5,14,18,21,25,28,30],see:[0,1,5,6,8,9,12,14,15,16,17,18,19,20,21,23,26],seen:0,select:30,self:1,semant:19,send:[0,16],sent:[5,6],sequenc:[1,28],session:30,set:[0,1,5,6,7,8,9,10,12,17],setbindir:10,setboolopt:[0,1,5,6],setcolumn:7,setdata:[0,1,7,17,18,19],setdblopt:1,setdual:[5,6],seterrorhandl:[0,1,11],setinst:[0,18],setintopt:1,setmatrix:7,setnam:[1,18],setopt:[0,1],setoutputhandl:[0,1],setup:28,setvalu:[7,17,18,19,21,23,30],sever:[0,26],shallow:1,shell:4,shell_messag:4,shell_output:4,should:[0,30],show:[1,4,5,14,17,18,19,21,25,28,30],shown:[0,30],side:1,sigint:4,similar:[0,1,23],simplifi:0,sinc:[5,6,7,30],singl:[0,1,7,8,23,30],size:[7,9,17,18,19,20,28],skeleton:7,slack:[5,6,21,23],small:26,snippet:[0,7,10],solut:[0,1,25,26,28],solv:[0,1,4,14,15],solveasync:1,solver:[1,4,5,6,14,15,21,23,26,28],some:[0,5,6,16,17,28,30],soon:0,sourc:2,space:1,spare:[18,19],specialis:0,specif:[0,6,7,12,19,30],specifi:[0,1,5,7,8,9,10,14,17,18,19,20,21,23,26,30],specifii:7,speed:28,split:0,sstatu:[5,6,14,15,21,23],stabil:28,start:[1,2,9,10,20,25],state:0,statement:[0,1,2,4,5,6,12,14,15,16,17,18,21,23,30],statu:[5,6,14,15,21,23],stdout:[0,1],step:1,stop:1,store:[0,1,4,17,19,30],string:[0,1,2,3,5,6,7,8,9,10,12,13,14,15,17,18,19,20,21,23,30],stronger:[21,23],subject:0,sublist:9,subprocess:10,subscript:23,substanti:1,substitut:[5,6,21,23],subtupl:20,succe:1,success:1,suffbuiltin:[5,6,14,15,21,23],suffici:[28,30],suffix:[5,6,8,14,15,18,21,23],sum:8,support:[5,7,18,19,20,28],sure:[26,30],symbol:[0,17],synchronis:9,syntax:[0,1],system:[0,1,3,8,10,20,26,27],tab:30,tabl:[1,4,7],tablenam:1,tabular:[1,7],taken:[0,8],task:[1,7],term:[0,28],termin:26,test:[0,8],than:[0,1,7,8,18,19],thei:[0,7,30],them:[0,1,17,30],therefor:0,therein:[18,19],thi:[0,1,2,3,4,5,6,7,8,9,10,11,12,14,15,16,17,18,19,20,21,23,25,26,27],thirdindex:7,those:23,thread:0,three:0,through:[0,1,5,6,9,11,14,15,16,19,21,23],thrown:[0,1,5,6,9,30],thu:0,time:[0,1,7,30],toarrai:[9,18,19],togeth:[0,3,26],toindex:9,tostr:[1,2,3,5,6,7,8,9,10,12,14,15,17,18,19,20,21,23],total_cost:30,totalcost:30,track:0,trackingmodel:25,translat:[0,1],transpar:0,transpos:17,treat:7,trial:26,trigger:[5,6],tupl:[0,5,8,14,17,18,19],two:[0,1,17,20,30],type:[0,1,4,5,7,8,12,14,18,19,20,21,30],typic:0,ub0:[21,23],ub1:[21,23],ub2:[21,23],udual:[5,6],uml:0,uncoupl:0,under:[0,8,28],underli:[0,1,3,5,6,8,9,10,11,14,15,16,17,18,19,21,23,30],undetermin:0,unexpect:1,unfix:[0,21,23],unmodifi:8,unsupport:9,unsupportedoperationexcept:[5,6,8,9,14,17,18,19,21],until:10,updat:[0,1,9,30],upper:[5,6,21,23,30],urc:[21,23],usabl:28,usag:[0,18,25,28],user:[0,1,9,10,26,28],uslack:[5,6,21,23],usual:[14,30],util:[9,19],val:[5,6,8,21,23],valid:[0,1,5,6,7,8,14,18,19,26,28],variabl:[0,1,5,6,8,10,12,20],variableinst:[0,8,21],variablenam:21,variou:[0,7,28,30],varnam:21,vector:7,vectori:30,veri:[20,30],version:[0,1,26,30],via:[0,1,5,7,20,27],view:[8,30],visibl:30,visualis:1,wai:[0,7,10,19,20,30],wait:4,walk:28,want:28,warn:[0,1,2,11,16],weaker:[21,23],what:27,when:[0,1,4,9,16,23,30],where:[1,2,7,10,20,23,26,30],whether:[8,10],which:[0,1,5,7,8,9,10,14,17,18,19,20,21,23,28,30],who:[26,27],whole:7,why:0,wiki:1,wikipedia:1,window:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],within:28,without:[1,10],work:[1,10,26],workaround:[5,6],working_directori:1,workspac:30,world:30,would:[0,30],wrap:[0,13],write:[0,1,4],write_t:4,writer:1,writet:1,written:[1,28],wrong:[5,6,7,8,14,17,18,21],www:[5,6,14,15,21,23],xref:[4,8],yet:26,you:[26,30],your:26,zero:8},titles:["Class structure","AMPL","AMPLException","AMPLOutput","AMPLOutput.Kind","Constraint","ConstraintInstance","DataFrame","Entity","EntityList","Environment","ErrorHandler","Instance","LicenseException","Objective","ObjectiveInstance","OutputHandler","Parameter","Set","SetInstance","Tuple","Variable","Variable.Integrality","VariableInstance","com.ampl","Java API examples","Getting started","AMPL Java API","Introduction","Javadoc","Java quick start","Java API reference"],titleterms:{"class":[0,31],"enum":[4,22],"import":30,"new":30,about:28,access:0,add:30,algebra:31,all:25,ampl:[0,1,24,25,27,28,30,31],amplexcept:2,amploutput:[3,4],api:[25,27,28,31],arbitrari:30,assign:[25,30],asynchron:25,between:0,build:25,can:28,close:30,com:24,command:0,complet:30,constant:[4,22],constraint:5,constraintinst:6,constructor:[1,2,7,10,13,20],content:27,creat:30,creation:30,data:[0,25,30],datafram:[7,25],deploy:26,develop:26,direct:0,effici:25,entiti:[0,8,30,31],entitylist:9,environ:[10,30],error:0,errorhandl:11,exampl:25,except:31,express:30,field:10,file:30,first:25,free:30,from:30,frontier:25,get:[25,26,30],handl:0,heurist:25,indic:27,initi:26,instal:26,instanc:[0,12],integr:22,interact:0,interrog:0,introduct:28,java:[25,27,30,31],javadoc:29,kind:4,librari:30,licenseexcept:13,list:30,load:30,manual:28,method:[1,2,3,5,6,7,8,9,10,11,12,14,15,16,17,18,19,20,21,23],model:[0,25,30],modifi:30,multidimension:25,numer:30,object:[14,30],objectiveinst:15,oper:25,option:[0,25],output:0,outputhandl:16,packag:31,paramet:[17,30],problem:30,program:30,project:30,quick:30,refer:[30,31],relat:0,requir:28,resourc:30,scalar:0,set:[18,25],setinst:19,simpl:25,solv:[25,30],start:[26,30],step:25,structur:0,system:28,tabl:27,test:26,thi:28,through:25,tupl:20,valu:[0,30],variabl:[21,22,30],variableinst:23,via:30,what:28,who:28}})