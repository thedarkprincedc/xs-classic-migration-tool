set -x
printenv
#regi help --browse
mkdir -p ${REGI_WORKSPACE}
regi create workSpace ${REGI_WORKSPACE} -f
pushd ${REGI_WORKSPACE}
regi track package ${REGI_PACKAGE}
cp -r ${REGI_SOURCE} ${REGI_PACKAGE}
regi commit 
regi activate
popd

