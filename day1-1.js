const company = {Name: 'Banglink', p: 10, i: 13,v: 21};
const {p,i,v} = company;

console.log(p,i,v);

const [m] = ['Maynuddin','Bhuiyan','hmshjhsa','sjhs'];
console.log(m);

const itCompany = {Name: 'Banglink',Networ:{
    bangladesh: '3g', inda: '4g',silonka: '5g',
    employ: {
        worker: 10, selare : 40000, workhour: 8,
    }
}
};

const{selare} = itCompany.Networ.employ;
const{worker} = itCompany.man.employ;

console.log(selare,worker);