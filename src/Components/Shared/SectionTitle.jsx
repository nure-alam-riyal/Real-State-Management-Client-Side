import PropTypes from 'prop-types'

const SectionTitle = ({head,subhead}) => {
    return (
        <div className="mt-20">
            <div className="lg:w-2/3 my-12 space-y-4 text-center mx-auto" >
            <h2 className="font-bold text-4xl">{head}</h2>
            <p className="opacity-75">{subhead}</p>
            </div>

        </div>
    );
};
SectionTitle.propTypes={
    head:PropTypes.string,
    subhead:PropTypes.string
}
export default SectionTitle;